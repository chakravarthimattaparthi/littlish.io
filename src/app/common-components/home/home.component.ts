import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topTitle:string = '';
  bottomTitle:string = '';
  loadCount: number = 0;
  loading: boolean = false;

  titles = [{
    topTile: 'Make Your Kids',
    bottomTitle: 'After School Time Much Better'
  },{
    topTile: 'Let US Remember',
    bottomTitle: 'One Book One Plan One Child'
  },{
    topTile: 'Children Must Be',
    bottomTitle: 'Thought How To Think'
  }]

  constructor() { }

  ngOnInit(): void {
    this.topTitle = this.titles[0].topTile;
    this.bottomTitle = this.titles[0].bottomTitle;
    this.loading = true;
    this.renderSliders();
    const NUMBER_OF_LEAVES = 30;   
    var container = document.getElementById('leafContainer') as HTMLVideoElement ;   
    /* Fill the empty container with new leaves */  
    for (var i = 0; i < NUMBER_OF_LEAVES; i++)    
    {   
        container.appendChild(this.createALeaf());   
    }   
  }

  renderSliders() {


    setTimeout(() => {
      if(this.loadCount === 2) {
        this.loadCount = 0;
      } else {
        this.loadCount = this.loadCount + 1;
      }
      this.loading = false;
      setTimeout(() => {
        this.loading = false;
        this.topTitle = this.titles[this.loadCount].topTile;
        this.bottomTitle = this.titles[this.loadCount].bottomTitle;
        setTimeout(() => {
          this.loading = true;
        })
        
      },2500)
     

      this.renderSliders();
    },7000); 

  }


  /*  
    Receives the lowest and highest values of a range and  
    returns a random integer that falls within that range.  
*/  
randomInteger(low: any, high: any)   
{   
    let test = high - low;
    return low + Math.floor(Math.random() * (test));   
}   
  
/*  
   Receives the lowest and highest values of a range and  
   returns a random float that falls within that range.  
*/  
randomFloat(low: any, high: any)   
{   
  let test1 = high - low;
    return low + Math.random() * (test1);   
}   
  
/*  
    Receives a number and returns its CSS pixel value.  
*/  
pixelValue(value: any)   
{   
    return value + 'px';   
}   
  
/*  
    Returns a duration value for the falling animation.  
*/  
  
 durationValue(value: any)   
{   
    return value + 's';   
}   
  
/*  
    Uses an img element to create each leaf. “Leaves.css” implements two spin   
    animations for the leaves: clockwiseSpin and counterclockwiseSpinAndFlip. This  
    function determines which of these spin animations should be applied to each leaf.  
 
*/  
createALeaf()   
{   
    /* Start by creating a wrapper div, and an empty img element */  
    var leafDiv = document.createElement('div');   
    var image = document.createElement('img');   
  
    /* Randomly choose a leaf image and assign it to the newly created element */  
    image.src = '../../../assets/icons/icon' + this.randomInteger(1, 5) + '.png';  
    image.width = 20;
  
    leafDiv.style.top = '-100px';   
  
    /* Position the leaf at a random location along the screen */  
    leafDiv.style.left = this.pixelValue(this.randomInteger(0, 500));   
  
    /* Randomly choose a spin animation */  
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';   
  
    /* Set the -webkit-animation-name property with these values */  
    leafDiv.style.animationName = 'fade, drop';   
    image.style.animationName = spinAnimationName;   
  
    /* Figure out a random duration for the fade and drop animations */  
    var fadeAndDropDuration = this.durationValue(this.randomFloat(5, 11));   
  
    /* Figure out another random duration for the spin animation */  
    var spinDuration = this.durationValue(this.randomFloat(4, 8));   
    /* Set the -webkit-animation-duration property with these values */  
    leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;   
  
    var leafDelay = this.durationValue(this.randomFloat(0, 5));   
    leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;   
  
    image.style.animationDuration = spinDuration;   
  
    // add the <img> to the <div>   
    leafDiv.appendChild(image);   
  
    /* Return this img element so it can be added to the document */  
    return leafDiv;   
}   
}
