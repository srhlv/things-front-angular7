import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: '[mediaPreview]' })
export class MediaPreviewDirective implements OnChanges {
    @Input() private media: File;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.media) {
            return;
        }
        const reader = new FileReader();
        const el = this.el;
        if (this.media.type.startsWith('image')) {
            reader.onloadend = () => el.nativeElement.src = reader.result;
        }
        reader.readAsDataURL(this.media);
    }
}