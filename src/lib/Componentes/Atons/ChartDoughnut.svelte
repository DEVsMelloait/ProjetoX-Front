<script>


    import { Doughnut } from 'svelte-chartjs';
    import { data } from '../../Data/data2.js';
  
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      ArcElement,
      CategoryScale,
    } from 'chart.js';
  
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
  </script>
  <div class="w-1/2">
  <Doughnut {data} options={{ responsive: true }} />
</div>
  