package com.company;

import javax.swing.*;
import java.awt.*;
import java.awt.geom.Ellipse2D;

public class AlgoFrame extends JFrame {
    private int canvasWidth;
    private int canvasHeight;
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

    public AlgoFrame(String title){
        this(title,1024,768);
    }

    private class AlgoCanvas extends JPanel {
        @Override
        public void paintComponent(Graphics g){
            super.paintComponent(g);
            Graphics2D g2d = (Graphics2D)g;

            int strokeWidth = 10;
            g2d.setStroke(new BasicStroke(strokeWidth));
            g2d.setColor(Color.RED);
            Ellipse2D circle  = new Ellipse2D.Float(50,50,300,300);
            g2d.draw(circle);
            Ellipse2D circle2  = new Ellipse2D.Float(60,60,280,280);
            g2d.fill(circle2);
        }


        @Override
        public Dimension getPreferredSize() {
            return new Dimension(canvasWidth,canvasHeight);
        }
    }
}
