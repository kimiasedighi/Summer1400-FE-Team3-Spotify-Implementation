import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CardComponent} from './card.component';
import {FetchSongDataService} from '../services/fetch-song-data.service';
import {RouterTestingModule} from '@angular/router/testing';
import {SimpleChanges} from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [RouterTestingModule],
      providers: [FetchSongDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const song = {
    id: 1,
    name: 'c',
    artist: 'd',
    lyrics: 'f',
    cover: 'k',
    file: 'd',
  };

  it('should update heartSrc', function () {
    // @ts-ignore
    const temp: SimpleChanges = {playlistIds: {currentValue: [1, 2, 3]}};
    component.playlistIds = [1, 2, 3];
    component.song = song;
    component.ngOnChanges(temp);
    expect(component.heartSrc).toEqual('assets/images/filled-heart.png');
  });

  it('add to favorite check heart src', async () => {
    component.song = song;
    component.playlistIds = [2, 3];
    const event = {
      target: {
        src: 'assets/images/heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'addToFavorites'
    ).and.callFake(() => true);
    await component.changeIcon(event);
    expect(component.heartSrc).toEqual('assets/images/filled-heart.png');
  });

  it('add to favorite check playlistids', async () => {
    component.song = song;
    component.playlistIds = [2, 3];
    const event = {
      target: {
        src: 'assets/images/heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'addToFavorites'
    ).and.callFake(() => true);
    await component.changeIcon(event);
    expect(component.playlistIds).toEqual([2, 3, 1]);
  });

  it('remove from favorite check heart src', async () => {
    component.song = song;
    component.playlistIds = [1, 2, 3];
    const event = {
      target: {
        src: 'assets/images/filled-heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'removeSongFromPlaylist'
    ).and.callFake(() => true);
    await component.changeIcon(event);
    expect(component.heartSrc).toEqual('assets/images/heart.png');
  });

  it('remove from favorite check playlistids', async () => {
    component.song = song;
    component.playlistIds = [1, 2, 3];
    const event = {
      target: {
        src: 'assets/images/filled-heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'removeSongFromPlaylist'
    ).and.callFake(() => true);
    await component.changeIcon(event);
    expect(component.playlistIds).toEqual([2, 3]);
  });
});
