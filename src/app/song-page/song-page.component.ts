import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongModel } from '../models';

import { FetchSongDataService } from '../services/fetch-song-data.service';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.scss'],
})
export class SongPageComponent implements OnInit {
  public song!: SongModel;
  public songFile!: string;

  constructor(
    private rout: ActivatedRoute,
    private fetchSongDataService: FetchSongDataService
  ) {}

  async ngOnInit() {
    this.song = await this.fetchSongDataService.fetchSong(
      +this.rout.snapshot.params['id']
    );
    this.songFile = this.song.file;
  }
}
