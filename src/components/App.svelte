<script>
    import d3 from 'd3';

    const width = 400;
    const height = 400;

    const xs = [1, 2, 2.5];
    const ys = [3, 2, 1];

    const x = d3.scaleLinear()
        .domain([0, 4])
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([0, 4])
        .range([height, 0]);
</script>

<svg {width} {height}>
    {#each d3.zip(xs, ys) as l}
    <line x1={x(1)} y1={y(l[0])} x2={x(3)} y2={y(l[1])} stroke="black" />
    {/each}
</svg>
