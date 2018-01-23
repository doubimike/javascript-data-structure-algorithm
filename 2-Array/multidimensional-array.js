/*
* @Author: zhanghang
* @Date:   2018-01-23 21:43:37
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 22:10:44
*/
var averageTempDay1 = [72,75,79,79,81,81]
var averageTempDay2 = [81,79,75,75,73,72]

var averageTemp = []
averageTemp[0]=[72,75,79,79,81,81]
averageTemp[1]=[81,79,75,75,73,72]

// day1
averageTemp[0]=[]
averageTemp[0][0]=[72]
averageTemp[0][1]=[75]
averageTemp[0][2]=[79]
averageTemp[0][3]=[79]
averageTemp[0][4]=[81]
averageTemp[0][5]=[81]

// day2
averageTemp[1]=[]
averageTemp[1][0]=[81]
averageTemp[1][1]=[79]
averageTemp[1][2]=[75]
averageTemp[1][3]=[75]
averageTemp[1][4]=[73]
averageTemp[1][5]=[72]



for(var i =0;i<averageTemp.length;i++){
    for(var j =0;j<averageTemp[i].length;j++){
        console.log(averageTemp[i][j]+' ')
    }
}

function printMatrix(myMatrix) {
    for(var i =0;i<myMatrix.length;i++){
        for(var j =0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j]+' ')
        }
    }    
}

printMatrix(averageTemp)

var matrix3x3x3 = []

for(var i =0;i<3;i++){
    matrix3x3x3[i]=[];
    for(var j =0;j<3;j++){
        matrix3x3x3[i][j]=[];
        for(var k =0;k<3;k++){
            matrix3x3x3[i][j][k]=i+j+k;
        }
    }
}

for(var i =0;i<matrix3x3x3.length;i++){
    for(var j =0;j<matrix3x3x3[i].length;j++){
        for(var k =0;k<matrix3x3x3[i][j].length;k++){
            console.log(matrix3x3x3[i][j][k]+' ')    
        }
        
    }
}

console.log(matrix3x3x3)


