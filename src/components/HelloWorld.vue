<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="../assets/logo.png">
    <q-select
      filled
      v-model="model"
      use-input
      use-chips
      multiple
      input-debounce="0"
      :options="filterOptions"
      @filter="filterFn"
      @focus="hf('1s')"
      style="width: 250px"
    />-->
    <!-- <col-string name="age"></col-string> -->

    <q-table title="Table Title" :data="data" :columns="columns" row-key="name">
      <template v-slot:body-cell-name="props">
        <td>{{ props.value }}11</td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      filterOptions: [1, 2, 3, 4, 5],
      model: 1,
      data: [{ name: 'hf', age: 22 }],
      columns: [
        {
          name: 'name',
          label: 'name',
          align: 'left',
          field: 'name',
        },
        {
          name: 'age',
          label: 'age',
          align: 'left',
          field: 'age',
        },
      ],
    };
  },
  created() {
    for (let index = 0; index < 10; index++) {
      this.data.push({
        name: 'hf' + index,
        age: 22 + index,
      });
    }
  },
  methods: {
    filterFn(val, update) {},
    hf(val) {
      debugger;
    },
  },
};
</script>
