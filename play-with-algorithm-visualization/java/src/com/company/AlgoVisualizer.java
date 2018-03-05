package com.company;

import java.awt.*;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;


public class AlgoVisualizer {
    //controller
    private Circle[] circles;
    private AlgoFrame frame;
    private boolean isAnimated =true;
    public AlgoVisualizer(int sceneWidth,int sceneHeight,int N){
        circles = new Circle[N];
        int R = 50;

        for(int i =0;i<N;i++){
            int x = (int)(Math.random()*(sceneWidth-2*R))+R;
            int y = (int)(Math.random()*(sceneHeight-2*R))+R;
            int vx = (int)(Math.random()*11)-5;
            int vy = (int)(Math.random()*11)-5;
            circles[i] = new Circle(x,y,R,vx,vy);
        }
        EventQueue.invokeLater(()->{
             frame = new AlgoFrame("Welcome",sceneWidth,sceneHeight);
            frame.addKeyListener(new AlgoKeyListener());
            new Thread(()->{
               run();
            }).start();
        });



    }
    private void run(){
        while(true){
//            绘制数据
            frame.render(circles);
//            更新数据
            if (isAnimated){
                AlgoVisHelper.pause(20);
                for(Circle circle:circles){
                    circle.move(0,0,frame.getCanvasWidth(),frame.getCanvasHeight());
                }
            }


        }
    }

    private class AlgoKeyListener extends KeyAdapter{
        @Override
        public void keyReleased(KeyEvent event){
            if (event.getKeyChar()==' '){
                isAnimated =!isAnimated;
            }
        }
    }

    public static void main(String[] args){
        int sceneWidth = 800;
        int sceneHeight = 800;
        int N = 10;
        AlgoVisualizer visualizer = new AlgoVisualizer(sceneWidth,
                sceneHeight,N);
    }
}
