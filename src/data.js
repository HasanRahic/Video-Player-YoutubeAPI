export const API_KEY = 'AIzaSyCcIY8NoU5pTLvYU-x6omUVdXywtQ1q2pQ';

export const value_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M";
    } else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    } else{
        return value;
    }
}