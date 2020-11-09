import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];

  constructor(private BlockchainService: BlockchainService) {
    this.blocks = BlockchainService.getBlocks();
  }

  ngOnInit(): void {
  }

}
