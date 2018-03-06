package com.company.MineSweeper;

public class MineSweeperData {
    public static final String blockImageURL = "resources/mine-sweeper/block.png";
    public static final String flagImageURL = "resources/mine-sweeper/flag.png";
    public static final String mineImageURL = "resources/mine-sweeper/mine.png";
    private int N,M;
    private boolean[][] mines;

    public static String numberImageURL(int num){
        if (num<0||num>=8)
            throw new IllegalArgumentException("No such a number image!");
        return "resources/mine-sweeper/"+num+".png";
    }

    public MineSweeperData(int N,int M,int mineNumber){
        if(N <= 0 || M <= 0)
            throw new IllegalArgumentException("Mine sweeper size is invalid!");

        if(mineNumber < 0 || mineNumber > N*M)
            throw new IllegalArgumentException("Mine number is larger than the size of mine sweeper board!");

        this.N = N;
        this.M = M;

        mines = new boolean[N][M];
        for(int i = 0 ; i < N ; i ++)
            for(int j = 0 ; j < M ; j ++){
                mines[i][j] = false;
            }
            generateMines(mineNumber);
    //测试
        // mines[0][0] = true;
    }

    private void generateMines(int mineNumber){
        // for(int i =0;i<mineNumber;i++){
        //     // 运气不好的话会永远在这里循环
        //     while(true){
        //     int x = (int)(Math.random()*N);
        //     int y = (int)(Math.random()*M);
        //         if (!mines[x][y]) {
        //             mines[x][y]=true;
        //             break;
        //         }
        //     }
        // }

        // 另外的  先有序mineNumbers，然后打乱
        for(int i =0;i<mineNumber;i++){
            int x = i/M;
            int y = i%M;
            mines[x][y]=true;
        }

        // 打乱 
        // 交换
        // 越大越乱 设置成多少比较好
        // int swapTime = 100;
        // 对每一个格子都进行一次交换  或者就是前面的排序好的雷
        int swapTime = N*M;

        for(int i=0;i<swapTime;i++){
        // for(int i=0;i<mineNumber;i++){
            //     int x1 = (int)(Math.random()*N);
            // int y1 = (int)(Math.random()*M);

            int x1 = i/M;
            int y1 = i%M;

                int x2 = (int)(Math.random()*N);
            int y2 = (int)(Math.random()*M);

            swap(x1,y1,x2,y2);
        }

    }



    public int M() {
        return M;
    }

    public int N() {
        return N;
    }

    public boolean isMine(int x, int y){
        if(!inArea(x, y))
            throw new IllegalArgumentException("Out of index in isMine function!");
        return mines[x][y];
    }

    public boolean inArea(int x, int y){
        return x >= 0 && x < N && y >= 0 && y < M;
    }

    private void swap(int x1,int y1,int x2,int y2){
        boolean t = mines[x1][y1];
        mines[x1][y1]=mines[x2][y2];
        mines[x2][y2]=t;
    }


}
