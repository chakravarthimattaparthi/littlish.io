import { Component, OnInit } from '@angular/core';
import { ElementRef, Input, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  templateUrl: './vjs-player.component.html',
  styleUrls: ['./vjs-player.component.scss', '../../../../node_modules/video.js/src/css/video-js.scss']
})
export class VjsPlayerComponent implements  OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef | any;

  // See options: https://videojs.com/guides/options
  @Input() options: {
    fluid: boolean;
    aspectRatio: string;
    autoplay: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  } | any;

  player: videojs.Player | any;

  constructor(
    private elementRef: ElementRef,
  ) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady');
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

}
