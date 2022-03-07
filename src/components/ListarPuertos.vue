<template>
  <div>
    <form @submit.prevent="filtrarPuertos" class="filter__form">
      <div>
        <label for="">Name</label>
        <input
          type="text"
          placeholder="Input name..."
          v-model="filtros.nombre"
        />
      </div>
      <div>
        <label for="">Continent</label>
        <select
          name="continente"
          id="continente"
          v-model="filtros.continente"
          @change="filtrarPaises"
        >
          <option value="">Select a continet...</option>
          <option
            v-for="contiente in selects.continentes"
            :key="contiente.id"
            :value="contiente.id"
          >
            {{ contiente.nombre }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Country</label>
        <select name="continente" id="continente" v-model="filtros.pais">
          <option class="option-select" value="">Select a country...</option>
          <option v-for="pais in selects.paises" :key="pais.pais">
            {{ pais.pais }}
          </option>
        </select>
      </div>
      <div>
        <button type="submit">Filter</button>
        <button type="button" class="reset__filter" @click="restablecerFitlro">
          Reset filter
        </button>
      </div>
    </form>
    <h2 class="header">List ports</h2>
    <section class="content__table">
      <table class="table__puertos">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Continent</th>
            <th>country</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody v-if="puertosMaritimos.length > 0">
          <tr v-for="puerto in puertosMaritimos" :key="puerto.id">
            <td>{{ puerto.id }}</td>
            <td>{{ puerto.name }}</td>
            <td>{{ puerto.continent }}</td>
            <td>{{ puerto.country }}</td>
            <td>{{ puerto.coordinates || "Sin asignar" }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5"><strong>No data...</strong></td>
          </tr>
        </tbody>
        <tfoot v-if="informacionExtra && rutas">
          <tr>
            <td colspan="5">
              <div class="paginacion">
                <div class="informacion-paginador">
                  <h5>Records:</h5>
                  <span class="valor-pagindor-span">{{
                    informacionExtra.per_page
                  }}</span>
                  <h5>From</h5>
                  <span class="valor-pagindor-span">{{
                    informacionExtra.from
                  }}</span>
                  <h5>-</h5>
                  <span class="valor-pagindor-span">{{
                    informacionExtra.to
                  }}</span>
                  <h5>Page current:</h5>
                  <span class="valor-pagindor-span">{{
                    informacionExtra.current_page
                  }}</span>
                  <h5>Last:</h5>
                  <span class="valor-pagindor-span">{{
                    informacionExtra.last_page
                  }}</span>
                  <h5>Total records:</h5>
                  <span class="valor-pagindor-span">{{
                    informacionExtra.total
                  }}</span>
                </div>
                <div>
                  <button
                    class="btn-talbe-navigation"
                    v-if="rutas.prev && rutas.first"
                    @click="obtenerPuertos(rutas.first)"
                  >
                    First
                  </button>
                  <button
                    class="btn-talbe-navigation"
                    v-if="rutas.prev"
                    @click="obtenerPuertos(rutas.prev)"
                  >
                    Prev
                  </button>
                  <button
                    class="btn-talbe-navigation"
                    v-if="rutas.next"
                    @click="obtenerPuertos(rutas.next)"
                  >
                    Next
                  </button>
                  <button
                    class="btn-talbe-navigation"
                    v-if="rutas.last"
                    @click="obtenerPuertos(rutas.last)"
                  >
                    Last
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  </div>
</template>
<script>
  import { paises, continentes } from "../constantes/constantes.js";

  export default {
    name: "ListarPuertos",
    data() {
      return {
        dbPuertosMaritimos: [],
        puertosMaritimos: [],
        filtros: {
          pais: "",
          nombre: "",
          continente: "",
        },
        rutas: null,
        informacionExtra: null,
        selects: {
          paises,
          continentes,
        },
      };
    },
    methods: {
      obtenerPuertos(url = "http://apitest.cargofive.com/api/ports") {
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((datos) => {
            const { data: puertos, links, meta } = datos;
            this.dbPuertosMaritimos = puertos;
            this.puertosMaritimos = puertos;
            this.rutas = links;
            this.informacionExtra = meta;
            this.filtrarPuertos();
          });
      },
      filtrarPaises() {
        this.selects.paises = paises.filter(
          (el) => el.continente === this.filtros.continente
        );
        this.filtros.pais = "";
      },
      filtrarPuertos() {
        const { nombre, continente, pais } = this.filtros;
        let puertosEcontrados = [];

        puertosEcontrados = this.dbPuertosMaritimos.reduce((acumulador, el) => {
          return el.name.toLowerCase().includes(nombre.toLowerCase())
            ? [...acumulador, el]
            : acumulador;
        }, []);
        if (continente !== "") {
          puertosEcontrados = puertosEcontrados.filter(
            (el) => el.continent === continente
          );
        }

        if (pais !== "") {
          puertosEcontrados = puertosEcontrados.filter(
            (el) => el.country === pais
          );
        }

        if (this.filtrarPuertos) {
          this.informacionExtra.per_page = puertosEcontrados.length;
        }
        this.puertosMaritimos = puertosEcontrados;
      },
      restablecerFitlro() {
        this.filtros.nombre = "";
        this.filtros.pais = "";
        this.filtros.continente = "";
        this.puertosMaritimos = this.dbPuertosMaritimos;
        this.informacionExtra.per_page = this.dbPuertosMaritimos.length;
      },
    },
    created() {
      this.obtenerPuertos();
    },
  };
</script>
<style lang=""></style>
