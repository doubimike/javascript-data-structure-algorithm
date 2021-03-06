package com.company.MineSweeper;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class AlgoVisualizer {

    private static int DELAY = 5;
    private static int blockSide = 32;

    private MineSweeperData data;
    private AlgoFrame frame;

    public AlgoVisualizer(int N, int M, int mineNumber) {

        data = new MineSweeperData(N, M, mineNumber);
        int sceneWidth = M * blockSide;
        int sceneHeight = N * blockSide;

        EventQueue.invokeLater(() -> {
            frame = new AlgoFrame("给敏感小猪的扫雷游戏", sceneWidth, sceneHeight);
            frame.addMouseListener(new AlgoMouseListener());
            new Thread(() -> {
                run();
            }).start();
        });
    }

    private void run() {

        setData(false,-1,-1);
    }

    private void setData(boolean isLeftClicked,int x,int y) {
        if(data.inArea(x,y)){
            if (isLeftClicked) {
                if (data.isMine(x,y)){
                    //Game Over
                    data.open[x][y]=true;
                }else {
                    data.open(x,y);
                }

            }else {
                data.flags[x][y]=!data.flags[x][y];
            }
        }
        frame.render(data);
        AlgoVisHelper.pause(DELAY);
    }


    private class AlgoMouseListener extends MouseAdapter {
        @Override
        public void mouseReleased(MouseEvent event) {

            event.translatePoint(-(int) (frame.getBounds().width - frame.getCanvasWidth()), -(int) (frame.getBounds()
                    .height - frame.getCanvasHeight()));
            Point pos = event.getPoint();
            int w = frame.getCanvasWidth() / data.M();
            int h = frame.getCanvasHeight() / data.N();

            int x = pos.y / h;
            int y = pos.x / w;

            if (SwingUtilities.isLeftMouseButton(event)) {
                setData(true, x, y);
            } else {
                setData(false, x, y);
            }
        }
    }

    public static void main(String[] args) {

        int N = 23;
        int M = 23;
        int mineNumber = 130;

        AlgoVisualizer vis = new AlgoVisualizer(N, M, mineNumber);

    }
}
