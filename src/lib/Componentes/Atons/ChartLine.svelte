<script>
// @ts-nocheck

    import { Line } from 'svelte-chartjs';
    import { teste } from '../../Data/data.js';
  
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      CategoryScale,
    } from 'chart.js';
  
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      CategoryScale
    );
  </script>
  <div class="teste ">
  <Line
  data={teste} options={{ responsive: true }}
  />
</div>
  <style>
    .teste {
        width: 800px;
        height: 500px;        
    }
  </style>