class Area{
    constructor(len,wid){
        this.len=len;
        this.wid=wid;
    }

    calculate_area(){
        var area=this.len*this.wid;
        return area
    }
}

let rect=new Area(20,12);
let ans=rect.calculate_area();
console.log("Area of Rectangle",ans);