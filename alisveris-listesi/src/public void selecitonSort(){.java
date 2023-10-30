public void selecitonSort(){

    int i, j , min;
    for(i =0; i<eleman.Sayisi - 1 ; i++)
{

min= i ; 
for(j= i+1 ; j< elemanSAyisi ; j++)
if (dizi[j]< dizi[min])
min = j;
swap(i,min);
}
}
