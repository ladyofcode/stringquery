# String Query

## Video URL: https://youtu.be/t2YVu9dWgyA

## About

String Query helps newbie guitarists search a curated selection of songs. Adam and Tabs are both guitarists (advanced and beginner respectively) and found available resources used to search songs minimal. 

String Query allows filtering of a list of songs by chords, genres, and will generate a list of songs based on those input criteria. The songs are stored in a JSON file.

Users can export their chords and genres into a CSV (the button will automatically download the options), and re-import it at whim. String Query should also retain all form options in local storage on reload unless the user clears the cache

The search bar will search through the title and artists of a current list of songs.

Each song component contains:
- Embed to the UberChord API. A button hides and shows the component, which makes the API call; we found that trying to load them all at once was something the API couldn't handle.
- Embed to the Spotify song for a preview.
- Link to YouTube search results for guitar tutorials to that specific song
- Link to Ultimate Guitar tabs for that specific song, although the user may need an account to access them

## Developing

After `npm install`, start a development server with `npm run dev`

## Building

To create a production version run `npm run build`.

The build can be previews with `npm run preview`.


## Credits

### Logos

YouTube: https://en.m.wikipedia.org/wiki/File:YouTube_social_white_square_%282017%29.svg
Ultimate guitar: https://en.m.wikipedia.org/wiki/File:Ultimate_Guitar_logo.svg
