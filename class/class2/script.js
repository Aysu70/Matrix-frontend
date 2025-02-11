class measure{
    constructor(m, H, V0, g){
        this.Weight = m;
        this.Height = H;
        this.firstVelocity = V0;
        this.gravity = g;
        this.lastVelocity = this.Vs();
        this.Time = this.t();
        this.Implus = this.P();
    }
    Vs(){
        return Math.sqrt(this.firstVelocity**2 + 2*this.gravity*this.Height);
    }
    t(){
        return (this.lastVelocity - this.firstVelocity)/this.gravity;
    }
    P(){
        return (this.Weight*this.gravity)/this.Time;
    }
}
 class measure2 extends measure {
    constructor(m, H, V0, g) {
        super(m, H, V0, g);
        this.maxkinetics = this.Ek();
        this.maxpotensial = this.Ep();
    }
    Ek(){
        return this.Implus*this.lastVelocity/2;
    }
    Ep(){
        return this.Weight*this.gravity*this.Height;
    }
 }
