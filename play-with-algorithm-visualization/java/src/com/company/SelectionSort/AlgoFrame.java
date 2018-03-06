package com.company.SelectionSort;

import javax.swing.*;
import java.awt.*;
public class AlgoFrame extends JFrame {
    private int canvasWidth;
    private int canvasHeight;
    // TODO:设置自己的数据
    private SelectionSortData  data;

    public AlgoFrame(String title,int canvasWidth,int canvasHeight){
        super(title);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        AlgoCanvas canvas = new AlgoCanvas();
        this.setContentPane(canvas);
        this.pack();
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(false);
        this.setVisible(true);
    }

    public int getCanvasWidth(){
        return canvasWidth;
    }

    public int getCanvasHeight(){
        return canvasHeight;
    }


    public void render(SelectionSortData data){
        this.data = data;
        this.repaint();
    }

    private class AlgoCanvas extends JPanel {
        // 双缓存
        public AlgoCanvas(){
            super(true);
        }
        @Override
        public void paintComponent(Graphics g) {
            super.paintComponent(g);
            Graphics2D g2d = (Graphics2D) g;

//            抗锯齿
            RenderingHints hints = new RenderingHints(RenderingHints
                    .KEY_ANTIALIASING,
                    RenderingHints.VALUE_ANTIALIAS_ON);
            g2d.addRenderingHints(hints);

//            具体绘制
           int w = canvasWidth/data.N();
           AlgoVisHelper.setColor(g2d,AlgoVisHelper.LightBlue);
           for(int i =0;i<data.N();i++){
               if (i<data.orderedIndex){
                AlgoVisHelper.setColor(g2d,AlgoVisHelper.Red);
               }else {
                   AlgoVisHelper.setColor(g2d,AlgoVisHelper.Grey);
               }

               if (i==data.currentCompareIndex)
                   AlgoVisHelper.setColor(g2d,AlgoVisHelper.LightBlue);
               if (i==data.currentMinIndex)
                   AlgoVisHelper.setColor(g2d,AlgoVisHelper.Indigo);

            AlgoVisHelper.fillRectangle(g2d,i*w,canvasHeight-data.get(i),w-1,data.get(i));
           }

        }
        @Override
        public Dimension getPreferredSize() {
            return new Dimension(canvasWidth,canvasHeight);
        }
    }
}
