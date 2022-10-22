import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      songs: [
        {
          title: 'Electronic Future Beats',
          artist: 'QubeSounds',
          src: require('../assets/music/electronic-future-beats-117997.mp3'),
          img: require('../assets/images/city.jpg'),
          isFavourite: true,
          duration: '2:06',
        },
        {
          title: 'Forest Lullaby',
          artist: 'Lesfm',
          src: require('../assets/music/forest-lullaby-110624.mp3'),
          img: require('../assets/images/tree.jpg'),
          isFavourite: false,
          duration: '2:18',
        },
        {
          title: 'Into The Night',
          artist: 'prazkhanal',
          src: require('../assets/music/into-the-night-20928.mp3'),
          img: require('../assets/images/sunset.jpg'),
          isFavourite: false,
          duration: '2:20',
        },
        {
          title: 'Lofi Study',
          artist: 'FASSounds',
          src: require('../assets/music/lofi-study-112191.mp3'),
          img: require('../assets/images/triangle.jpg'),
          isFavourite: true,
          duration: '2:27',
        },
        {
          title: 'Moment',
          artist: 'SergeQuadrado',
          src: require('../assets/music/moment-14023.mp3'),
          img: require('../assets/images/early-morning.jpg'),
          isFavourite: false,
          duration: '3:32',
        },
        {
          title: 'Powerful Beat',
          artist: 'penguinmusic',
          src: require('../assets/music/powerful-beat-121791.mp3'),
          img: require('../assets/images/studio.jpg'),
          isFavourite: false,
          duration: '1:13',
        },
        {
          title: 'Slow Trap',
          artist: 'Anton Vlasov',
          src: require('../assets/music/slow-trap-18565.mp3'),
          img: require('../assets/images/eclipse.jpg'),
          isFavourite: false,
          duration: '2:34'
        },
      ],
      index: 0,
      player: new Audio(),
      nowPlaying: false,
    };
  },
  getters: {
    playlist(state) {
      return state.songs;
    },
    songIndex(state) {
      return state.index;
    },
  },

  mutations: {
    play(state, payload) {
      state.player.src = state.songs[payload.value].src;
      state.player.play();
      state.nowPlaying = true;
    },
    pause(state) {
      state.player.pause();
      state.nowPlaying = false;
    },
  }

});

export default store