import { Game } from './game';
describe('Game', () => {
  it('has title', () => {
    let game: Game = {title: 'Sample Title', url: 'Sample url',note: 'Sample note'};
    expect(game.title).toEqual('Sample Title');
  });
  it('has url', () => {
    let game: Game = {title: 'Sample Title', url: 'Sample url',note: 'Sample note'};
    expect(game.url).toEqual("Sample url");
  });
  it('has note', () => {
    let game: Game = {title: 'Sample Title', url: 'Sample url',note: 'Sample note'};
    expect(game.note).toEqual("Sample note");
  });
});