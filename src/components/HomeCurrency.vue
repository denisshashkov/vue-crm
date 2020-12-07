<template>
  <div class="col s12 m6 l8">
    <div class="card  green bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{ "CurrencyAmountTitle" | localize }}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>{{ "Currency" | localize }}</th>
              <th>{{ "CurrencyType" | localize }}</th>
              <th>{{ "Date" | localize }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cur of currencies" :key="cur">
              <td>{{ cur }}</td>
              <td>{{ conversion_rates[cur].toFixed(2) }}</td>
              <td>{{ time_last_update_utc | date("date") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["conversion_rates", "time_last_update_utc"],
  data: () => ({
    currencies: ["RUB", "USD", "EUR"]
  })
};
</script>
