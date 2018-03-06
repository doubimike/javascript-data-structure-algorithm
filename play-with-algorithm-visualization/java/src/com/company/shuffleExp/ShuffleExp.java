package com.company.shuffleExp;

public class ShuffleExp {
	private int N;
	private int n,m;
	// N是实现次数  小n个格子的区域，有m个累  统计每个格子出现累的次数应该差不多 
    public ShuffleExp(int N,int n,int m){
        if (N<=0){
            throw new IllegalArgumentException("N must be larger than 0!");
        }
        if (n<m) {
        	throw new IllegalArgumentException("n must be larger than  or equal to m!");	
        }

        this.N = N;
        this.n = n;
        this.m = m;
    }

    public void run(){
    	int freq[] = new int[n];

    	int arr[] = new int[n];
    	for(int i =0;i<N;i++){
    		reset(arr);
    		// 洗牌
    		shuffle(arr);
    		for(int j =0;j<n;j++){
    			freq[j]+=arr[j];
    		}
    		// 统计
    	}

    	for(int i=0;i<n;i++){
    		System.out.println(i+":"+(double)freq[i]/N);
    	}
    }

    private void shuffle(int[] arr){
    	for(int i =0;i<n;i++){
    		int x = (int)(Math.random()*n);
    		swap(arr,i,x);
    	}
    }
    private void swap(int[]arr,int x,int y){
    	int t = arr[x];
    	arr[x]=arr[y];
    	arr[y]=t;
    }

    private void reset(int[] arr){
    	for(int  i=0;i<m;i++){
    		arr[i]=1;
    	}
    	for(int i =m;i<n;i++){
    		arr[i]=0;
    	}
    }
    public static void main(String[] args){
    	int N = 10000000;
    	int n = 10;
    	int m = 5;

    	ShuffleExp exp = new ShuffleExp(N,n,m);
    	exp.run();
    }
}
