import { Injectable } from '@angular/core';

@Injectable()
export class TextProcessorService {

  constructor() {

  }

  public processUserInput(input: string): string {

    // 1. Process hyphens
    input = this.processHyphens(input);

    return input;
  }

  processHyphens(input: string): string {
    input = input.replace(/-{2}/g, function(t) {return '—';});
    return input;
  }


}

