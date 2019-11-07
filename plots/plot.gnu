set grid

set xrange [0:15]
set yrange [0:graphYRange]

set style line 1 lc rgb '#258e8e' lt 1 lw 1 pt 6 pi -1 ps 1
set style line 2 lc rgb '#8e2559' lt 1 lw 1 pt 8 pi -1 ps 1

set pointintervalbox 2

set title graphTitle

set font 'Helvetica Light'

set key out horizontal left bottom

plot\
       graphData using 2 title 'Resposta de pressão à barra' with linespoints ls 1,\
       graphData using 3 title 'Resposta de pressão à barra acumulada' with linespoints ls 2

