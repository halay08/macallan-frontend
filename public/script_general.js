(function () {
  var a = {};
  function trans(c, d) {
    var e =
      arguments['length'] === 0x1
        ? [arguments[0x0]]
        : Array['apply'](null, arguments);
    a[e[0x0]] = e;
    return '';
  }
  function regTextVar(c, d) {
    var e = ![];
    d = d['toLowerCase']();
    var f = function () {
      var o = this['get']('data');
      o['updateText'](o['translateObjs'][c]);
    };
    var g = function (o) {
      var p = o['data']['nextSelectedIndex'];
      if (p >= 0x0) {
        var q = o['source']['get']('items')[p];
        var r = function () {
          q['unbind']('start', r, this);
          f['call'](this);
        };
        q['bind']('start', r, this);
      } else f['call'](this);
    };
    var h = function (o) {
      return function (p) {
        if (o in p) {
          f['call'](this);
        }
      }['bind'](this);
    };
    var i = function (o, p) {
      return function (q, r) {
        if (o == q && p in r) {
          f['call'](this);
        }
      }['bind'](this);
    };
    var j = function (o, p, q) {
      for (var r = 0x0; r < o['length']; ++r) {
        var s = o[r];
        var t = s['get']('selectedIndex');
        if (t >= 0x0) {
          var u = p['split']('.');
          var v = s['get']('items')[t];
          if (q !== undefined && !q['call'](this, v)) continue;
          for (var w = 0x0; w < u['length']; ++w) {
            if (v == undefined) return '';
            v = 'get' in v ? v['get'](u[w]) : v[u[w]];
          }
          return v;
        }
      }
      return '';
    };
    var k = function (o) {
      var p = o['get']('player');
      return (
        p !== undefined && p['get']('viewerArea') == this['getMainViewer']()
      );
    };
    switch (d) {
      case 'title':
      case 'subtitle':
        var m = (function () {
          switch (d) {
            case 'title':
              return 'media.label';
            case 'subtitle':
              return 'media.data.subtitle';
          }
        })();
        if (m) {
          return function () {
            var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
            if (!e) {
              for (var p = 0x0; p < o['length']; ++p) {
                o[p]['bind']('changing', g, this);
              }
              e = !![];
            }
            return j['call'](this, o, m, k);
          };
        }
        break;
      default:
        if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
          var n = undefined;
          var m = (function () {
            switch (d) {
              case 'quiz.questions.answered':
                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
              case 'quiz.question.count':
                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
              case 'quiz.items.found':
                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
              case 'quiz.item.count':
                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
              case 'quiz.score':
                return TDV['Quiz']['PROPERTY']['SCORE'];
              case 'quiz.score.total':
                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
              case 'quiz.time.remaining':
                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
              case 'quiz.time.elapsed':
                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
              case 'quiz.time.limit':
                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
              case 'quiz.media.items.found':
                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
              case 'quiz.media.item.count':
                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
              case 'quiz.media.questions.answered':
                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
              case 'quiz.media.question.count':
                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
              case 'quiz.media.score':
                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
              case 'quiz.media.score.total':
                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
              case 'quiz.media.index':
                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
              case 'quiz.media.count':
                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
              case 'quiz.media.visited':
                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
              default:
                var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                if (o) {
                  n = o[0x1];
                  switch ('quiz.' + o[0x2]) {
                    case 'quiz.score':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.media.items.found':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'PANORAMA_ITEMS_FOUND'
                      ];
                    case 'quiz.media.item.count':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'PANORAMA_ITEM_COUNT'
                      ];
                    case 'quiz.media.questions.answered':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'PANORAMA_QUESTIONS_ANSWERED'
                      ];
                    case 'quiz.media.question.count':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'PANORAMA_QUESTION_COUNT'
                      ];
                    case 'quiz.questions.answered':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'QUESTIONS_ANSWERED'
                      ];
                    case 'quiz.question.count':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'QUESTION_COUNT'
                      ];
                    case 'quiz.items.found':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                    case 'quiz.media.score':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'PANORAMA_SCORE'
                      ];
                    case 'quiz.media.score.total':
                      return TDV['Quiz']['OBJECTIVE_PROPERTY'][
                        'PANORAMA_TOTAL_SCORE'
                      ];
                  }
                }
            }
          })();
          if (m) {
            return function () {
              var o = this['get']('data')['quiz'];
              if (o) {
                if (!e) {
                  if (n != undefined)
                    if (n == 'global') {
                      var q = this['get']('data')['quizConfig'];
                      var s = q['objectives'];
                      for (var u = 0x0, w = s['length']; u < w; ++u) {
                        o['bind'](
                          TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'],
                          i['call'](this, s[u]['id'], m),
                          this
                        );
                      }
                    } else {
                      o['bind'](
                        TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'],
                        i['call'](this, n, m),
                        this
                      );
                    }
                  else
                    o['bind'](
                      TDV['Quiz']['EVENT_PROPERTIES_CHANGE'],
                      h['call'](this, m),
                      this
                    );
                  e = !![];
                }
                try {
                  var x = 0x0;
                  if (n != undefined) {
                    if (n == 'global') {
                      var q = this['get']('data')['quizConfig'];
                      var s = q['objectives'];
                      for (var u = 0x0, w = s['length']; u < w; ++u) {
                        x += o['getObjective'](s[u]['id'], m);
                      }
                    } else {
                      x = o['getObjective'](n, m);
                    }
                  } else {
                    x = o['get'](m);
                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                      x += 0x1;
                  }
                  return x;
                } catch (y) {
                  return undefined;
                }
              }
            };
          }
        }
        break;
    }
    return '';
  }
  function createQuizConfig(player, c) {
    var d = {};
    d['player'] = player;
    d['playList'] = c;
    function e(h) {
      for (var j = 0x0; j < h['length']; ++j) {
        var k = h[j];
        if ('id' in k) player[k['id']] = k;
      }
    }
    if (d['questions']) {
      e(d['questions']);
      for (var f = 0x0; f < d['questions']['length']; ++f) {
        var g = d['questions'][f];
        e(g['options']);
      }
    }
    if (d['objectives']) {
      e(d['objectives']);
    }
    if (d['califications']) {
      e(d['califications']);
    }
    if (d['score']) {
      player[d['score']['id']] = d['score'];
    }
    if (d['question']) {
      player[d['question']['id']] = d['question'];
    }
    if (d['timeout']) {
      player[d['timeout']['id']] = d['timeout'];
    }
    player['get']('data')['translateObjs'] = a;
    return d;
  }
  var b = {
    backgroundColorDirection: 'vertical',
    scrollBarMargin: 2,
    id: 'rootPlayer',
    downloadEnabled: false,
    borderRadius: 0,
    gap: 10,
    verticalAlign: 'top',
    start: 'this.init()',
    paddingLeft: 0,
    children: [
      'this.MainViewer',
      'this.Container_60ECDF15_758A_89F0_41DB_134ED0FB717A',
      'this.veilPopupPanorama',
      'this.zoomImagePopupPanorama',
      'this.closeButtonPopupPanorama'
    ],
    definitions: [
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B2A74607_BC90_652F_41C8_59850453622F_t.jpg',
        class: 'Video',
        height: 1080,
        label: trans('video_B2A74607_BC90_652F_41C8_59850453622F.label'),
        id: 'video_B2A74607_BC90_652F_41C8_59850453622F',
        width: 1920,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '01_Lobby_30s' },
        autoplay: true,
        video: {
          width: 1920,
          class: 'VideoResource',
          levels: [
            {
              width: 1920,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B2A74607_BC90_652F_41C8_59850453622F.mp4',
              class: 'VideoResourceLevel',
              bitrate: 3888,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B2A74607_BC90_652F_41C8_59850453622F_poster.jpg',
              framerate: 25,
              height: 1080
            }
          ],
          height: 1080
        }
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_A9F85B91_BC91_E320_41E7_1EB25170BEDA',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window31258' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7D7C6C_BF73_A5E1_4167_4EFC92280EC7'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_AE2016B7_BC90_A560_41E0_E0C1B15006BA',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window27089' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7A3C6B_BF73_A5E7_41E6_89B9211D8F03'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_AE60592B_BC90_AF67_41E2_92A871F7B288',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window33278' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7FAC6C_BF73_A5E1_41DE_D215CED963D6'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_938DE4E5_9E86_FCF1_41B3_1E4EFFD66032',
          'this.overlay_938DF4E5_9E86_FCF1_41D5_9E24A0E89CA5',
          'this.overlay_938C04E5_9E86_FCF1_41CF_2C3F996E097C',
          'this.overlay_938C14E5_9E86_FCF1_41DA_622FABF6E738'
        ],
        vfov: 16.88,
        label: trans('panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C.label'),
        id: 'panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'V11_01_Mastery_taste ' },
        adjacentPanoramas: [
          {
            class: 'AdjacentPanorama',
            distance: 14.43,
            select:
              "this.overlay_938DE4E5_9E86_FCF1_41B3_1E4EFFD66032.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.19,
            yaw: 0.41,
            data: { overlayID: 'overlay_938DE4E5_9E86_FCF1_41B3_1E4EFFD66032' },
            panorama: 'this.panorama_9345617B_9E87_15D1_41B7_729AF050AB26'
          },
          {
            class: 'AdjacentPanorama',
            distance: 37.69,
            select:
              "this.overlay_938C14E5_9E86_FCF1_41DA_622FABF6E738.get('areas').forEach(function(a){ a.trigger('click') })",
            yaw: -8.73,
            data: { overlayID: 'overlay_938C14E5_9E86_FCF1_41DA_622FABF6E738' },
            panorama: 'this.panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3'
          },
          {
            class: 'AdjacentPanorama',
            distance: 17.48,
            select:
              "this.overlay_938DF4E5_9E86_FCF1_41D5_9E24A0E89CA5.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.41,
            yaw: 0.4,
            data: { overlayID: 'overlay_938DF4E5_9E86_FCF1_41D5_9E24A0E89CA5' },
            panorama: 'this.panorama_935E2477_9E89_73D1_41DF_11480B88250D'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_64E3D4AF_7599_B8D0_41D5_5C7C360396A1_0.jpg',
            width: 767,
            class: 'ImageResourceLevel',
            height: 463
          },
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_64E3D4AF_7599_B8D0_41D5_5C7C360396A1_1.jpg',
            width: 512,
            class: 'ImageResourceLevel',
            height: 309
          }
        ],
        id: 'res_64E3D4AF_7599_B8D0_41D5_5C7C360396A1',
        data: { type: 'popup' },
        class: 'ImageResource'
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_79A2AC10_7597_8FF0_4199_2A6D3D6EDC32',
          'this.overlay_79A29C11_7597_8FF0_41CB_0617BE8FD504',
          'this.overlay_7A9CFBBA_75B6_8831_41B3_20DD32AA47CA',
          'this.overlay_7A58046E_75B9_B850_41CC_E0531701F76C',
          'this.overlay_B3B9D179_BC90_5FE0_41D9_11F67C709F9C',
          'this.overlay_7B92C76C_7589_B850_41D0_DAD4FC98ED44'
        ],
        vfov: 16.88,
        label: trans('panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40.label'),
        id: 'panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'Collaboration with MC3  copy' },
        adjacentPanoramas: [
          {
            enabledInSurfaceSelection: false,
            class: 'AdjacentPanorama',
            distance: 41.75,
            select:
              "this.overlay_7A9CFBBA_75B6_8831_41B3_20DD32AA47CA.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.35,
            yaw: 1.13,
            data: { overlayID: 'overlay_7A9CFBBA_75B6_8831_41B3_20DD32AA47CA' },
            panorama: 'this.panorama_90789B51_9E87_15D1_41D9_77CCA65046D6'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B22AF5EF_BCF0_E6E0_41C2_1225ECE773EA_t.jpg',
        class: 'Video',
        height: 1080,
        label: trans('video_B22AF5EF_BCF0_E6E0_41C2_1225ECE773EA.label'),
        id: 'video_B22AF5EF_BCF0_E6E0_41C2_1225ECE773EA',
        width: 1920,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '03_Mastery V2' },
        autoplay: true,
        video: {
          width: 1920,
          class: 'VideoResource',
          levels: [
            {
              width: 1920,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B22AF5EF_BCF0_E6E0_41C2_1225ECE773EA.mp4',
              class: 'VideoResourceLevel',
              bitrate: 3888,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B22AF5EF_BCF0_E6E0_41C2_1225ECE773EA_poster.jpg',
              framerate: 25,
              height: 1080
            }
          ],
          height: 1080
        }
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_AE3D1499_BC90_A523_41E2_BAE5A149DD00',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window32268' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7C4C6C_BF73_A5E1_41E5_B83C581DD1F6'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        toolTipShadowOpacity: 1,
        data: { name: 'Main Viewer' },
        subtitlesPaddingRight: 5,
        id: 'MainViewer',
        progressBarBorderRadius: 0,
        subtitlesPaddingLeft: 5,
        surfaceReticleSelectionOpacity: 1,
        width: '100%',
        playbackBarProgressBackgroundColorDirection: 'vertical',
        playbackBarProgressBorderColor: '#000000',
        subtitlesFontSize: '3vmin',
        progressBarBorderSize: 0,
        subtitlesPaddingBottom: 5,
        progressBarBackgroundColor: ['#3399FF'],
        progressBackgroundColorRatios: [0],
        playbackBarBackgroundColor: ['#FFFFFF'],
        playbackBarLeft: 0,
        playbackBarHeadBackgroundColorDirection: 'vertical',
        playbackBarHeight: 10,
        doubleClickAction: 'toggle_fullscreen',
        toolTipHorizontalAlign: 'center',
        progressBorderColor: '#000000',
        subtitlesBackgroundOpacity: 0.2,
        playbackBarHeadWidth: 6,
        progressLeft: 0,
        toolTipShadowHorizontalLength: 0,
        playbackBarHeadHeight: 15,
        toolTipPaddingLeft: 6,
        borderSize: 0,
        playbackBarHeadBorderRadius: 0,
        toolTipPaddingBottom: 4,
        playbackBarHeadShadowBlurRadius: 3,
        displayTooltipInSurfaceSelection: true,
        class: 'ViewerArea',
        toolTipPaddingRight: 6,
        progressRight: 0,
        playbackBarBackgroundColorDirection: 'vertical',
        playbackBarHeadShadowColor: '#000000',
        transitionMode: 'blending',
        progressOpacity: 1,
        subtitlesBorderColor: '#FFFFFF',
        playbackBarHeadBorderSize: 0,
        subtitlesTextDecoration: 'none',
        playbackBarHeadBackgroundColorRatios: [0, 1],
        playbackBarProgressBorderSize: 0,
        propagateClick: false,
        progressBarBackgroundColorDirection: 'vertical',
        height: '100%',
        playbackBarHeadShadow: true,
        playbackBarRight: 0,
        shadow: false,
        playbackBarHeadOpacity: 1,
        subtitlesFontFamily: 'Arial',
        progressBackgroundColor: ['#FFFFFF'],
        toolTipTextShadowOpacity: 0,
        progressBarOpacity: 1,
        toolTipFontColor: '#606060',
        playbackBarProgressOpacity: 1,
        subtitlesShadow: false,
        paddingTop: 0,
        progressBarBorderColor: '#000000',
        playbackBarHeadBorderColor: '#000000',
        playbackBarProgressBorderRadius: 0,
        subtitlesOpacity: 1,
        toolTipBackgroundColor: '#F6F6F6',
        toolTipDisplayTime: 600,
        playbackBarProgressBackgroundColor: ['#3399FF'],
        playbackBarBorderSize: 0,
        progressBarBackgroundColorRatios: [0],
        paddingBottom: 0,
        subtitlesPaddingTop: 5,
        subtitlesGap: 0,
        playbackBarOpacity: 1,
        toolTipShadowColor: '#333333',
        vrPointerColor: '#FFFFFF',
        subtitlesBackgroundColor: '#000000',
        paddingLeft: 0,
        toolTipFontFamily: 'Arial',
        playbackBarHeadShadowHorizontalLength: 0,
        progressBackgroundColorDirection: 'vertical',
        toolTipBorderColor: '#767676',
        transitionDuration: 500,
        subtitlesHorizontalAlign: 'center',
        playbackBarHeadShadowOpacity: 0.7,
        toolTipBorderRadius: 3,
        subtitlesVerticalAlign: 'bottom',
        paddingRight: 0,
        translationTransitionDuration: 1000,
        firstTransitionDuration: 0,
        playbackBarBackgroundOpacity: 1,
        progressBottom: 0,
        subtitlesTop: 0,
        surfaceReticleColor: '#FFFFFF',
        subtitlesTextShadowOpacity: 1,
        toolTipTextShadowBlurRadius: 3,
        toolTipOpacity: 1,
        playbackBarHeadBackgroundColor: ['#111111', '#666666'],
        surfaceReticleOpacity: 0.6,
        subtitlesTextShadowBlurRadius: 0,
        toolTipTextShadowColor: '#000000',
        toolTipShadowBlurRadius: 3,
        surfaceReticleSelectionColor: '#FFFFFF',
        toolTipFontWeight: 'normal',
        vrPointerSelectionTime: 2000,
        displayTooltipInTouchScreens: true,
        playbackBarHeadShadowVerticalLength: 0,
        subtitlesTextShadowColor: '#000000',
        subtitlesBorderSize: 0,
        subtitlesFontColor: '#FFFFFF',
        toolTipShadowVerticalLength: 0,
        progressHeight: 10,
        minHeight: 50,
        subtitlesEnabled: true,
        subtitlesTextShadowHorizontalLength: 1,
        progressBorderSize: 0,
        minWidth: 100,
        playbackBarProgressBackgroundColorRatios: [0],
        toolTipBorderSize: 1,
        playbackBarBottom: 5,
        subtitlesTextShadowVerticalLength: 1,
        playbackBarBorderColor: '#FFFFFF',
        subtitlesFontWeight: 'normal',
        toolTipFontStyle: 'normal',
        playbackBarBorderRadius: 0,
        borderRadius: 0,
        toolTipPaddingTop: 4,
        progressBorderRadius: 0,
        progressBackgroundOpacity: 1,
        vrPointerSelectionColor: '#FF6600',
        toolTipShadowSpread: 0,
        toolTipFontSize: '1.11vmin',
        subtitlesBottom: 50
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_642933B6_759E_B830_41D7_7713382A2651',
          'this.overlay_6534AD39_759E_8830_41C2_E2B42592D517',
          'this.overlay_924A2168_9E89_15F0_41C8_BA99530D9803',
          'this.popup_656D3D17_759F_89FF_41D5_B2AFEBA255EC',
          'this.overlay_92A66BE7_9E8B_74F1_41C4_FFA7D5122C0A'
        ],
        vfov: 16.88,
        label: trans('panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E.label'),
        id: 'panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'V11_02_CC_Gallery ' },
        adjacentPanoramas: [
          {
            class: 'AdjacentPanorama',
            distance: 17.48,
            select:
              "this.overlay_642933B6_759E_B830_41D7_7713382A2651.get('areas').forEach(function(a){ a.trigger('click') })",
            yaw: 0.4,
            data: { overlayID: 'overlay_642933B6_759E_B830_41D7_7713382A2651' },
            panorama: 'this.panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40'
          },
          {
            class: 'AdjacentPanorama',
            distance: 14.43,
            select:
              "this.overlay_6534AD39_759E_8830_41C2_E2B42592D517.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.4,
            yaw: 0.41,
            data: { overlayID: 'overlay_6534AD39_759E_8830_41C2_E2B42592D517' },
            panorama: 'this.panorama_935E2477_9E89_73D1_41DF_11480B88250D'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B37F980D_BCF1_AD20_41E1_0C0AD4238D93_t.jpg',
        class: 'Video',
        height: 720,
        label: trans('video_B37F980D_BCF1_AD20_41E1_0C0AD4238D93.label'),
        id: 'video_B37F980D_BCF1_AD20_41E1_0C0AD4238D93',
        width: 1280,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '04_3_Taste_Cinnamon' },
        autoplay: true,
        video: {
          width: 1280,
          class: 'VideoResource',
          levels: [
            {
              width: 1280,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B37F980D_BCF1_AD20_41E1_0C0AD4238D93.mp4',
              class: 'VideoResourceLevel',
              bitrate: 1728,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B37F980D_BCF1_AD20_41E1_0C0AD4238D93_poster.jpg',
              framerate: 25,
              height: 720
            }
          ],
          height: 720
        }
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B30AF79A_BCF0_A321_41D4_D3B6E5E1CFAF_t.jpg',
        class: 'Video',
        height: 720,
        label: trans('video_B30AF79A_BCF0_A321_41D4_D3B6E5E1CFAF.label'),
        id: 'video_B30AF79A_BCF0_A321_41D4_D3B6E5E1CFAF',
        width: 1280,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '04_4_Taste_Pear' },
        autoplay: true,
        video: {
          width: 1280,
          class: 'VideoResource',
          levels: [
            {
              width: 1280,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B30AF79A_BCF0_A321_41D4_D3B6E5E1CFAF.mp4',
              class: 'VideoResourceLevel',
              bitrate: 1728,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B30AF79A_BCF0_A321_41D4_D3B6E5E1CFAF_poster.jpg',
              framerate: 25,
              height: 720
            }
          ],
          height: 720
        }
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_919966D7_9E99_1CD0_41E3_7F4848A8FA1F',
          'this.overlay_919916D7_9E99_1CD0_4162_7929D7917281',
          'this.overlay_919906D7_9E99_1CD0_41D1_23E181C4F979',
          'this.overlay_919936D7_9E99_1CD0_41C2_7C0FA5B9C076'
        ],
        vfov: 16.88,
        label: trans('panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3.label'),
        id: 'panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'image (6)' },
        adjacentPanoramas: [
          {
            class: 'AdjacentPanorama',
            distance: 100,
            select:
              "this.overlay_919966D7_9E99_1CD0_41E3_7F4848A8FA1F.get('areas').forEach(function(a){ a.trigger('click') })",
            yaw: 12.78,
            data: { overlayID: 'overlay_919966D7_9E99_1CD0_41E3_7F4848A8FA1F' },
            panorama: 'this.panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B227002A_BCF0_5D60_41D1_547326ECEEFB_t.jpg',
        class: 'Video',
        height: 1080,
        label: trans('video_B227002A_BCF0_5D60_41D1_547326ECEEFB.label'),
        id: 'video_B227002A_BCF0_5D60_41D1_547326ECEEFB',
        width: 1920,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '02_Place V2' },
        autoplay: true,
        video: {
          width: 1920,
          class: 'VideoResource',
          levels: [
            {
              width: 1920,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B227002A_BCF0_5D60_41D1_547326ECEEFB.mp4',
              class: 'VideoResourceLevel',
              bitrate: 3888,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B227002A_BCF0_5D60_41D1_547326ECEEFB_poster.jpg',
              framerate: 25,
              height: 1080
            }
          ],
          height: 1080
        }
      },
      {
        backgroundColorDirection: 'vertical',
        scrollBarMargin: 2,
        id: 'Container_60ECDF15_758A_89F0_41DB_134ED0FB717A',
        left: '0%',
        borderRadius: 0,
        children: [
          'this.Label_662EA410_758E_9FF0_41D5_F1CC7070BF20',
          'this.Image_63EB4FB2_75BF_8830_41D6_A559529C25EC'
        ],
        gap: 10,
        verticalAlign: 'top',
        paddingLeft: 0,
        data: { name: 'Container26832' },
        width: '100%',
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        horizontalAlign: 'left',
        bottom: '0%',
        borderSize: 0,
        backgroundColor: ['#FFFFFF', '#FFFFFF'],
        class: 'Container',
        backgroundColorRatios: [0, 1],
        layout: 'absolute',
        backgroundOpacity: 0.7,
        scrollBarVisible: 'rollOver',
        minHeight: 1,
        height: '5%',
        minWidth: 1,
        propagateClick: false,
        scrollBarWidth: 10,
        scrollBarOpacity: 0.5,
        shadow: false,
        scrollBarColor: '#000000',
        paddingTop: 0,
        contentOpaque: false,
        interactionEnabled: false,
        paddingBottom: 0
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_AE7086D4_BC90_A520_41E3_C919D4D3D8B6',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window30207' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7DDC6B_BF73_A5E7_41D8_204AE0287090'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_9345117B_9E87_15D1_41DF_88ED8BC27934',
          'this.overlay_9345017B_9E87_15D1_41D5_D47CBD5C9C77',
          'this.overlay_9345317B_9E87_15D1_41D7_0393160B3579'
        ],
        vfov: 16.88,
        label: trans('panorama_9345617B_9E87_15D1_41B7_729AF050AB26.label'),
        id: 'panorama_9345617B_9E87_15D1_41B7_729AF050AB26',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_9345617B_9E87_15D1_41B7_729AF050AB26_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'V11_01_Mastery' },
        adjacentPanoramas: [
          {
            class: 'AdjacentPanorama',
            distance: 17.41,
            select:
              "this.overlay_9345117B_9E87_15D1_41DF_88ED8BC27934.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.41,
            yaw: 0.19,
            data: { overlayID: 'overlay_9345117B_9E87_15D1_41DF_88ED8BC27934' },
            panorama: 'this.panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C'
          },
          {
            class: 'AdjacentPanorama',
            distance: 14.66,
            select:
              "this.overlay_9345317B_9E87_15D1_41D7_0393160B3579.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.36,
            yaw: 0.22,
            data: { overlayID: 'overlay_9345317B_9E87_15D1_41D7_0393160B3579' },
            panorama: 'this.panorama_90789B51_9E87_15D1_41D9_77CCA65046D6'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        displayPlaybackBar: true,
        displayPlayOverlay: true,
        class: 'VideoPlayer',
        clickAction: 'play_pause',
        id: 'MainViewerVideoPlayer',
        viewerArea: 'this.MainViewer'
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_9345617B_9E87_15D1_41B7_729AF050AB26_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        fontFamily: 'Adobe Garamond Pro',
        paddingTop: 0,
        fontWeight: 'normal',
        id: 'Label_662EA410_758E_9FF0_41D5_F1CC7070BF20',
        left: '10%',
        width: 536,
        verticalAlign: 'middle',
        paddingLeft: 0,
        data: { name: 'Label27062' },
        fontColor: '#000000',
        paddingRight: 0,
        text: trans('Label_662EA410_758E_9FF0_41D5_F1CC7070BF20.text'),
        toolTipHorizontalAlign: 'center',
        horizontalAlign: 'center',
        borderSize: 0,
        bottom: '34.57%',
        height: 14,
        class: 'Label',
        backgroundOpacity: 0,
        fontSize: '1.5vmin',
        minHeight: 1,
        minWidth: 1,
        propagateClick: false,
        shadow: false,
        textDecoration: 'none',
        borderRadius: 0,
        fontStyle: 'normal',
        paddingBottom: 0
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_935E3477_9E89_73D1_41E0_DD2C7DDFD0C8',
          'this.overlay_935EC477_9E89_73D1_41C8_D8299641296B',
          'this.overlay_935ED477_9E89_73D1_41E1_FDF58ABA5193'
        ],
        vfov: 16.88,
        label: trans('panorama_935E2477_9E89_73D1_41DF_11480B88250D.label'),
        id: 'panorama_935E2477_9E89_73D1_41DF_11480B88250D',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_935E2477_9E89_73D1_41DF_11480B88250D_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'V11_02_CYO' },
        adjacentPanoramas: [
          {
            class: 'AdjacentPanorama',
            distance: 17.48,
            select:
              "this.overlay_935E3477_9E89_73D1_41E0_DD2C7DDFD0C8.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.41,
            yaw: 0.4,
            data: { overlayID: 'overlay_935E3477_9E89_73D1_41E0_DD2C7DDFD0C8' },
            panorama: 'this.panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E'
          },
          {
            class: 'AdjacentPanorama',
            distance: 14.43,
            select:
              "this.overlay_935EC477_9E89_73D1_41C8_D8299641296B.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.4,
            yaw: 0.41,
            data: { overlayID: 'overlay_935EC477_9E89_73D1_41C8_D8299641296B' },
            panorama: 'this.panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3334B36_BCF0_A360_41E5_B87B380CFBC6_t.jpg',
        class: 'Video',
        height: 720,
        label: trans('video_B3334B36_BCF0_A360_41E5_B87B380CFBC6.label'),
        id: 'video_B3334B36_BCF0_A360_41E5_B87B380CFBC6',
        width: 1280,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '04_4_Taste_Pear' },
        autoplay: true,
        video: {
          width: 1280,
          class: 'VideoResource',
          levels: [
            {
              width: 1280,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3334B36_BCF0_A360_41E5_B87B380CFBC6.mp4',
              class: 'VideoResourceLevel',
              bitrate: 1728,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3334B36_BCF0_A360_41E5_B87B380CFBC6_poster.jpg',
              framerate: 25,
              height: 720
            }
          ],
          height: 720
        }
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3E45329_BCF1_E363_41E3_08243E6CFD7E_t.jpg',
        class: 'Video',
        height: 720,
        label: trans('video_B3E45329_BCF1_E363_41E3_08243E6CFD7E.label'),
        id: 'video_B3E45329_BCF1_E363_41E3_08243E6CFD7E',
        width: 1280,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '04_2_Taste_Vanilla' },
        autoplay: true,
        video: {
          width: 1280,
          class: 'VideoResource',
          levels: [
            {
              width: 1280,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3E45329_BCF1_E363_41E3_08243E6CFD7E.mp4',
              class: 'VideoResourceLevel',
              bitrate: 1728,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3E45329_BCF1_E363_41E3_08243E6CFD7E_poster.jpg',
              framerate: 25,
              height: 720
            }
          ],
          height: 720
        }
      },
      {
        hfov: 30,
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_t.jpg',
        class: 'Panorama',
        overlays: [
          'this.overlay_90788B51_9E87_15D1_41E2_12203B44E946',
          'this.overlay_90727B51_9E87_15D1_41D8_3FBDD2EA6A22',
          'this.overlay_90726B51_9E87_15D1_41D6_CA7960CBA3DD'
        ],
        vfov: 16.88,
        label: trans('panorama_90789B51_9E87_15D1_41D9_77CCA65046D6.label'),
        id: 'panorama_90789B51_9E87_15D1_41D9_77CCA65046D6',
        frames: [
          {
            thumbnailUrl:
              'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_t.jpg',
            front: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  class: 'TiledImageResourceLevel',
                  tags: 'ondemand',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: ['ondemand', 'preload'],
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_0/f/vr/0.jpg',
                  colCount: 1,
                  class: 'TiledImageResourceLevel',
                  tags: 'mobilevr',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ],
              class: 'ImageResource'
            },
            class: 'CubicPanoramaFrame'
          }
        ],
        pitch: 0,
        hfovMax: 30,
        data: { label: 'V12_gallery 1_edited' },
        adjacentPanoramas: [
          {
            class: 'AdjacentPanorama',
            distance: 18.02,
            select:
              "this.overlay_90727B51_9E87_15D1_41D8_3FBDD2EA6A22.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 0.22,
            yaw: 0.36,
            data: { overlayID: 'overlay_90727B51_9E87_15D1_41D8_3FBDD2EA6A22' },
            panorama: 'this.panorama_9345617B_9E87_15D1_41B7_729AF050AB26'
          },
          {
            class: 'AdjacentPanorama',
            distance: 14.9,
            select:
              "this.overlay_90726B51_9E87_15D1_41D6_CA7960CBA3DD.get('areas').forEach(function(a){ a.trigger('click') })",
            backwardYaw: 1.13,
            yaw: 0.35,
            data: { overlayID: 'overlay_90726B51_9E87_15D1_41D6_CA7960CBA3DD' },
            panorama: 'this.panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40'
          }
        ],
        partial: true,
        hfovMin: '150%'
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_ACD51FBD_BCF3_A360_41D7_54CAC75A7BFA_t.jpg',
        class: 'Video',
        height: 720,
        label: trans('video_ACD51FBD_BCF3_A360_41D7_54CAC75A7BFA.label'),
        id: 'video_ACD51FBD_BCF3_A360_41D7_54CAC75A7BFA',
        width: 1280,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '05_Virtual_Tasting' },
        autoplay: true,
        video: {
          width: 1280,
          class: 'VideoResource',
          levels: [
            {
              width: 1280,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_ACD51FBD_BCF3_A360_41D7_54CAC75A7BFA.mp4',
              class: 'VideoResourceLevel',
              bitrate: 1728,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_ACD51FBD_BCF3_A360_41D7_54CAC75A7BFA_poster.jpg',
              framerate: 25,
              height: 720
            }
          ],
          height: 720
        }
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_AE4BBE59_BD70_E520_41DD_40A4A3C24EDE',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window25565' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7AFC6A_BF73_A5E1_41DA_5F24A5D92EA6'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        items: [
          'this.PanoramaPlayListItem_AD7FCC6D_BF73_A5E3_41E2_1377803D1443',
          {
            media: 'this.panorama_90789B51_9E87_15D1_41D9_77CCA65046D6',
            class: 'PanoramaPlayListItem',
            begin: 'this.setEndToItemIndex(this.mainPlayList, 1, 2)',
            player: 'this.MainViewerPanoramaPlayer',
            camera: 'this.panorama_90789B51_9E87_15D1_41D9_77CCA65046D6_camera'
          },
          {
            media: 'this.panorama_9345617B_9E87_15D1_41B7_729AF050AB26',
            class: 'PanoramaPlayListItem',
            begin: 'this.setEndToItemIndex(this.mainPlayList, 2, 3)',
            player: 'this.MainViewerPanoramaPlayer',
            camera: 'this.panorama_9345617B_9E87_15D1_41B7_729AF050AB26_camera'
          },
          'this.PanoramaPlayListItem_AD7A3C6C_BF73_A5E1_41E4_8E3DE2B564DE',
          {
            media: 'this.panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3',
            class: 'PanoramaPlayListItem',
            begin: 'this.setEndToItemIndex(this.mainPlayList, 4, 5)',
            player: 'this.MainViewerPanoramaPlayer',
            camera: 'this.panorama_919136D7_9E99_1CD0_41CC_25AF27A935A3_camera'
          },
          {
            media: 'this.panorama_935E2477_9E89_73D1_41DF_11480B88250D',
            class: 'PanoramaPlayListItem',
            begin: 'this.setEndToItemIndex(this.mainPlayList, 5, 6)',
            player: 'this.MainViewerPanoramaPlayer',
            camera: 'this.panorama_935E2477_9E89_73D1_41DF_11480B88250D_camera'
          },
          {
            media: 'this.panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E',
            class: 'PanoramaPlayListItem',
            begin: 'this.setEndToItemIndex(this.mainPlayList, 6, 7)',
            player: 'this.MainViewerPanoramaPlayer',
            camera: 'this.panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_camera'
          },
          {
            media: 'this.video_B2A74607_BC90_652F_41C8_59850453622F',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)"
          },
          {
            media: 'this.video_B227002A_BCF0_5D60_41D1_547326ECEEFB',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 8)"
          },
          {
            media: 'this.video_B22AF5EF_BCF0_E6E0_41C2_1225ECE773EA',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9)"
          },
          {
            media: 'this.video_B3C2F6A2_BCF0_6560_41B1_2D5B0D78BB2E',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10)"
          },
          {
            media: 'this.video_B3E45329_BCF1_E363_41E3_08243E6CFD7E',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)"
          },
          {
            media: 'this.video_B37F980D_BCF1_AD20_41E1_0C0AD4238D93',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12)"
          },
          {
            media: 'this.video_B3334B36_BCF0_A360_41E5_B87B380CFBC6',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)"
          },
          {
            media: 'this.video_B30AF79A_BCF0_A321_41D4_D3B6E5E1CFAF',
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)"
          },
          {
            media: 'this.video_ACD51FBD_BCF3_A360_41D7_54CAC75A7BFA',
            end: "this.trigger('tourEnded')",
            class: 'VideoPlayListItem',
            begin:
              'this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 0)',
            player: 'this.MainViewerVideoPlayer',
            start:
              "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)"
          }
        ],
        id: 'mainPlayList',
        class: 'PlayList'
      },
      {
        thumbnailUrl:
          'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3C2F6A2_BCF0_6560_41B1_2D5B0D78BB2E_t.jpg',
        class: 'Video',
        height: 1080,
        label: trans('video_B3C2F6A2_BCF0_6560_41B1_2D5B0D78BB2E.label'),
        id: 'video_B3C2F6A2_BCF0_6560_41B1_2D5B0D78BB2E',
        width: 1920,
        loop: false,
        scaleMode: 'fit_inside',
        data: { label: '04_1_Taste_Main_V2' },
        autoplay: true,
        video: {
          width: 1920,
          class: 'VideoResource',
          levels: [
            {
              width: 1920,
              url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3C2F6A2_BCF0_6560_41B1_2D5B0D78BB2E.mp4',
              class: 'VideoResourceLevel',
              bitrate: 3888,
              type: 'video/mp4',
              posterURL:
                'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/video_B3C2F6A2_BCF0_6560_41B1_2D5B0D78BB2E_poster.jpg',
              framerate: 25,
              height: 1080
            }
          ],
          height: 1080
        }
      },
      {
        touchControlMode: 'drag_rotation',
        gyroscopeVerticalDraggingEnabled: true,
        class: 'PanoramaPlayer',
        viewerArea: 'this.MainViewer',
        displayPlaybackBar: true,
        arrowKeysAction: 'translate',
        aaEnabled: true,
        zoomEnabled: true,
        mouseControlMode: 'drag_rotation',
        id: 'MainViewerPanoramaPlayer',
        surfaceSelectionEnabled: false
      },
      {
        class: 'PanoramaCamera',
        automaticZoomSpeed: 10,
        id: 'panorama_935E2477_9E89_73D1_41DF_11480B88250D_camera',
        initialPosition: { yaw: 0, class: 'PanoramaCameraPosition', pitch: 0 },
        hoverFactor: 0
      },
      {
        borderRadius: 0,
        paddingTop: 0,
        data: { name: 'Image30077' },
        id: 'Image_63EB4FB2_75BF_8830_41D6_A559529C25EC',
        width: '8.926%',
        verticalAlign: 'middle',
        paddingLeft: 0,
        right: '20%',
        url: 'skin/Image_63EB4FB2_75BF_8830_41D6_A559529C25EC.png',
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        horizontalAlign: 'center',
        borderSize: 0,
        top: '13.04%',
        class: 'Image',
        backgroundOpacity: 0,
        minHeight: 1,
        minWidth: 1,
        propagateClick: false,
        shadow: false,
        scaleMode: 'fit_inside',
        paddingBottom: 0
      },
      {
        hfov: 1.43,
        rotationX: 0,
        class: 'PopupPanoramaOverlay',
        showEasing: 'cubic_in',
        showDuration: 500,
        popupDistance: 100,
        hideDuration: 500,
        id: 'popup_656D3D17_759F_89FF_41D5_B2AFEBA255EC',
        popupMaxHeight: '95%',
        rotationZ: 0,
        rotationY: 0,
        popupMaxWidth: '95%',
        pitch: 0.47,
        yaw: -6.89,
        image: 'this.res_64E3D4AF_7599_B8D0_41D5_5C7C360396A1',
        hideEasing: 'cubic_out'
      },
      {
        shadowHorizontalLength: 3,
        bodyPaddingTop: 0,
        closeButtonPressedBorderColor: '#000000',
        closeButtonRollOverIconLineWidth: 2,
        closeButtonRollOverBorderSize: 0,
        id: 'window_AE100AA3_BC97_AD60_41C8_EAF03D040492',
        titleFontFamily: 'Arial',
        gap: 10,
        data: { name: 'Window28140' },
        closeButtonIconColor: '#B2B2B2',
        closeButtonPressedBackgroundColor: [],
        bodyPaddingBottom: 0,
        footerBackgroundColorRatios: [0, 0.9, 1],
        headerVerticalAlign: 'middle',
        width: '90%',
        closeButtonPaddingLeft: 0,
        closeButtonPaddingRight: 0,
        modal: true,
        toolTipHorizontalAlign: 'center',
        overflow: 'scroll',
        closeButtonPressedBackgroundColorRatios: [],
        closeButtonPaddingBottom: 0,
        headerBackgroundOpacity: 0,
        borderSize: 0,
        horizontalAlign: 'center',
        closeButtonPressedBorderSize: 0,
        veilHideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        backgroundColor: [],
        closeButtonBorderColor: '#000000',
        bodyPaddingRight: 0,
        class: 'Window',
        height: '90%',
        backgroundColorRatios: [],
        closeButtonBackgroundColorRatios: [],
        closeButtonRollOverBackgroundColor: [],
        titleFontColor: '#000000',
        closeButtonRollOverIconColor: '#FFFFFF',
        veilColorRatios: [0, 1],
        headerBackgroundColorDirection: 'vertical',
        propagateClick: false,
        bodyPaddingLeft: 0,
        veilOpacity: 0.4,
        closeButtonPressedIconLineWidth: 3,
        contentOpaque: false,
        footerBackgroundOpacity: 0,
        hideEffect: {
          duration: 500,
          class: 'FadeOutEffect',
          easing: 'cubic_in_out'
        },
        closeButtonBackgroundColor: [],
        closeButtonPaddingTop: 0,
        shadow: true,
        scrollBarColor: '#000000',
        titleFontSize: '1.29vmin',
        scrollBarOpacity: 0.5,
        showEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        titlePaddingLeft: 5,
        headerPaddingRight: 0,
        titleHorizontalAlign: 'left',
        bodyBackgroundColorRatios: [0, 0.5, 1],
        scrollBarMargin: 2,
        shadowVerticalLength: 0,
        veilColorDirection: 'horizontal',
        backgroundColorDirection: 'vertical',
        headerBackgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        paddingTop: 0,
        paddingBottom: 0,
        titlePaddingTop: 5,
        titlePaddingBottom: 5,
        children: ['this.WebFrame_AD7A4C6B_BF73_A5E7_41DA_3BC76F0E9ED7'],
        verticalAlign: 'middle',
        shadowColor: '#000000',
        paddingLeft: 0,
        bodyBackgroundColor: ['#FFFFFF', '#DDDDDD', '#FFFFFF'],
        footerBackgroundColor: ['#FFFFFF', '#EEEEEE', '#DDDDDD'],
        closeButtonRollOverBorderColor: '#000000',
        titlePaddingRight: 5,
        bodyBackgroundOpacity: 0,
        paddingRight: 0,
        headerPaddingBottom: 5,
        closeButtonBorderSize: 0,
        closeButtonIconLineWidth: 2,
        scrollBarVisible: 'rollOver',
        veilShowEffect: {
          duration: 500,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        headerBackgroundColorRatios: [0, 0.1, 1],
        shadowOpacity: 0.5,
        footerBackgroundColorDirection: 'vertical',
        layout: 'vertical',
        headerPaddingLeft: 10,
        backgroundOpacity: 1,
        closeButtonBackgroundOpacity: 0,
        shadowSpread: 1,
        closeButtonIconHeight: 20,
        closeButtonRollOverBackgroundColorRatios: [],
        footerHeight: 5,
        minWidth: 20,
        closeButtonBorderRadius: 11,
        minHeight: 20,
        closeButtonPressedIconColor: '#FFFFFF',
        scrollBarWidth: 10,
        veilColor: ['#000000', '#000000'],
        closeButtonRollOverBackgroundOpacity: 0,
        headerPaddingTop: 10,
        closeButtonIconWidth: 20,
        bodyBackgroundColorDirection: 'vertical',
        borderRadius: 5,
        closeButtonPressedBackgroundOpacity: 0,
        shadowBlurRadius: 6
      },
      {
        backgroundColorDirection: 'vertical',
        showEffect: {
          duration: 350,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        id: 'veilPopupPanorama',
        left: 0,
        borderRadius: 0,
        data: { name: 'UIComponent33961' },
        right: 0,
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        bottom: 0,
        borderSize: 0,
        top: 0,
        class: 'UIComponent',
        backgroundColorRatios: [0],
        backgroundOpacity: 0.55,
        minHeight: 0,
        backgroundColor: ['#000000'],
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        visible: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        backgroundColorDirection: 'vertical',
        id: 'zoomImagePopupPanorama',
        left: 0,
        borderRadius: 0,
        data: { name: 'ZoomImage33962' },
        right: 0,
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        bottom: 0,
        borderSize: 0,
        top: 0,
        class: 'ZoomImage',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        backgroundColor: [],
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        scaleMode: 'custom',
        visible: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        cursor: 'hand',
        backgroundColorDirection: 'vertical',
        shadowBlurRadius: 6,
        showEffect: {
          duration: 350,
          class: 'FadeInEffect',
          easing: 'cubic_in_out'
        },
        fontWeight: 'normal',
        iconLineWidth: 5,
        id: 'closeButtonPopupPanorama',
        borderRadius: 0,
        gap: 5,
        verticalAlign: 'middle',
        fontFamily: 'Arial',
        paddingLeft: 5,
        shadowColor: '#000000',
        right: 10,
        fontColor: '#FFFFFF',
        paddingRight: 5,
        toolTipHorizontalAlign: 'center',
        data: { name: 'CloseButton33963' },
        iconWidth: '100%',
        borderColor: '#000000',
        horizontalAlign: 'center',
        borderSize: 0,
        top: 10,
        class: 'CloseButton',
        backgroundColorRatios: [0, 0.1, 1],
        layout: 'horizontal',
        mode: 'push',
        backgroundOpacity: 0.3,
        fontSize: '1.29vmin',
        shadowSpread: 1,
        minHeight: 0,
        backgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        minWidth: 0,
        propagateClick: false,
        iconColor: '#000000',
        shadow: false,
        rollOverIconColor: '#666666',
        iconHeight: '100%',
        pressedIconColor: '#888888',
        textDecoration: 'none',
        visible: false,
        paddingTop: 5,
        fontStyle: 'normal',
        paddingBottom: 5
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33958' },
        id: 'WebFrame_AD7D7C6C_BF73_A5E1_4167_4EFC92280EC7',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33955' },
        id: 'WebFrame_AD7A3C6B_BF73_A5E7_41E6_89B9211D8F03',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33960' },
        id: 'WebFrame_AD7FAC6C_BF73_A5E1_41DE_D215CED963D6',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_65A040D0_75BE_B871_41C6_12E28F60215E'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 1.9,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Dw' },
            vfov: 1.16,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E344AF_7599_B8D0_41D6_4914B2DF62B1',
            pitch: -6.71,
            yaw: 0.41
          }
        ],
        id: 'overlay_938DE4E5_9E86_FCF1_41B3_1E4EFFD66032',
        data: { label: 'btn-Dw', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7AE8F4A6_75B9_F8D0_41C2_D94037637538'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 3.34,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Up-01' },
            vfov: 2.31,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
            pitch: -5.55,
            yaw: 0.4
          }
        ],
        id: 'overlay_938DF4E5_9E86_FCF1_41D5_9E24A0E89CA5',
        data: { label: 'btn-Up-01', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7A2E6513_75BA_B9F7_41C8_AAD53BF814C3'
        ],
        items: [
          {
            hfov: 1.85,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-playvideo' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2F4AF_7599_B8D0_41DA_5D853AE48CAA',
            pitch: 0.41,
            yaw: -5.72
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-playvideo' },
        useHandCursor: true,
        maps: [],
        id: 'overlay_938C04E5_9E86_FCF1_41CF_2C3F996E097C'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_92F97B2E_9E89_1573_41D4_F2D0E75EDD33'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 1.34,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: -2.57,
            yaw: -8.73
          }
        ],
        id: 'overlay_938C14E5_9E86_FCF1_41DA_622FABF6E738',
        data: { label: 'btn-ingredients', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_301BE184_3D70_74B3_41A4_567423859E6B'
        ],
        items: [
          {
            hfov: 3.04,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: '240621_macallan linear gallery-15' },
            vfov: 0.54,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_3336D051_3D70_1452_41CA_E7C48808924E',
            pitch: -1.56,
            yaw: -1.99
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: '240621_macallan linear gallery-15' },
        enabledInCardboard: true,
        useHandCursor: true,
        enabled: false,
        maps: [],
        id: 'overlay_79A2AC10_7597_8FF0_4199_2A6D3D6EDC32'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_300693B9_3D70_74D5_41C5_35FDA9AA40DF'
        ],
        rollOverDisplay: true,
        class: 'HotspotPanoramaOverlay',
        enabled: false,
        items: [
          {
            hfov: 3.42,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: '240621_macallan linear gallery-16' },
            vfov: 0.51,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_33370052_3D70_1456_41BF_00A11C6D80A4',
            pitch: -1.56,
            yaw: -2.01
          }
        ],
        id: 'overlay_79A29C11_7597_8FF0_41CB_0617BE8FD504',
        data: { label: '240621_macallan linear gallery-16' },
        enabledInCardboard: true,
        useHandCursor: true,
        maps: []
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_78658C74_75B6_8830_41D8_70E64D11EA15'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        enabled: false,
        items: [
          {
            hfov: 2.6,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Up-01' },
            vfov: 1.86,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
            pitch: -2.32,
            yaw: 1.13
          }
        ],
        id: 'overlay_7A9CFBBA_75B6_8831_41B3_20DD32AA47CA',
        data: { label: 'btn-Up-01', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7BC88519_75B9_B9F0_41CF_B9A7EDAA9316'
        ],
        items: [
          {
            hfov: 1.32,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-playvideo' },
            vfov: 1.28,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2F4AF_7599_B8D0_41DA_5D853AE48CAA',
            pitch: 0.41,
            yaw: -2.02
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-playvideo' },
        useHandCursor: true,
        enabled: false,
        maps: [],
        id: 'overlay_7A58046E_75B9_B850_41CC_E0531701F76C'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_B3B2D1A8_BC90_5F60_41E3_C28CFAF0B9AC'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        data: { label: '050721_macallan linear gallery_V2-1' },
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 18.12,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: '050721_macallan linear gallery_V2-1' },
            vfov: 11.29,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_ADE05013_BC8F_DD27_41E4_8628349925D2',
            pitch: 0.17,
            yaw: -0.33
          }
        ],
        id: 'overlay_B3B9D179_BC90_5FE0_41D9_11F67C709F9C'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7B8EF7A0_7589_B8D0_41DC_11CF6AD26E2D'
        ],
        items: [
          {
            hfov: 4.87,
            roll: 0,
            class: 'HotspotPanoramaOverlayImage',
            data: { label: 'Polygon' },
            distance: 50,
            image: {
              levels: [
                {
                  url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_HS_8wqhkpwg.png',
                  width: 975,
                  class: 'ImageResourceLevel',
                  height: 220
                }
              ],
              class: 'ImageResource'
            },
            pitch: -3.63,
            yaw: -0.47
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'Polygon' },
        enabledInCardboard: true,
        useHandCursor: true,
        maps: [],
        id: 'overlay_7B92C76C_7589_B850_41D0_DAD4FC98ED44'
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33959' },
        id: 'WebFrame_AD7C4C6C_BF73_A5E1_41E5_B83C581DD1F6',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_642973B7_759E_B830_4164_9EB8A57678A8'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 3.34,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Up-01' },
            vfov: 2.31,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
            pitch: -5.55,
            yaw: 0.4
          }
        ],
        id: 'overlay_642933B6_759E_B830_41D7_7713382A2651',
        data: { label: 'btn-Up-01', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_65359D39_759E_8830_4154_CAAB2E8F25E7'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 1.9,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Dw' },
            vfov: 1.16,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E344AF_7599_B8D0_41D6_4914B2DF62B1',
            pitch: -6.71,
            yaw: 0.41
          }
        ],
        id: 'overlay_6534AD39_759E_8830_41C2_E2B42592D517',
        data: { label: 'btn-Dw', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_924AE16C_9E89_15F0_41E0_20CD6DA0E399'
        ],
        items: [
          {
            hfov: 1.43,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.14,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: 0.47,
            yaw: -6.89
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-ingredients' },
        enabledInCardboard: true,
        useHandCursor: true,
        maps: [],
        id: 'overlay_924A2168_9E89_15F0_41C8_BA99530D9803'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_92A61BE7_9E8B_74F1_41B1_6A3E819AB81F'
        ],
        items: [
          {
            hfov: 1.13,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.05,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: -1.32,
            yaw: 2.94
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-ingredients' },
        enabledInCardboard: true,
        useHandCursor: true,
        maps: [],
        id: 'overlay_92A66BE7_9E8B_74F1_41C4_FFA7D5122C0A'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_6409160C_759E_FBD0_41DA_6DE408E24971'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 2.07,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'Arrow 07' },
            vfov: 3.93,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 100,
            image: 'this.res_64E3C4AF_7599_B8D0_41C1_9B35577BEB85',
            pitch: -0.55,
            yaw: 12.78
          }
        ],
        id: 'overlay_919966D7_9E99_1CD0_41E3_7F4848A8FA1F',
        data: { label: 'Arrow 07', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_923B1328_9E89_157F_41D3_5FC65ED1C22D'
        ],
        items: [
          {
            hfov: 1.5,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: -6.09,
            yaw: -8.5
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-ingredients' },
        useHandCursor: true,
        maps: [],
        id: 'overlay_919916D7_9E99_1CD0_4162_7929D7917281'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_92EFF326_9E89_3573_41DD_2CEA914898A2'
        ],
        items: [
          {
            hfov: 1.5,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: -6.05,
            yaw: 0.01
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-ingredients' },
        useHandCursor: true,
        maps: [],
        id: 'overlay_919906D7_9E99_1CD0_41D1_23E181C4F979'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_921821EC_9E89_14F7_41CB_8026DDECC1EC'
        ],
        items: [
          {
            hfov: 1.5,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: -6.05,
            yaw: 8.47
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-ingredients' },
        useHandCursor: true,
        maps: [],
        id: 'overlay_919936D7_9E99_1CD0_41C2_7C0FA5B9C076'
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33957' },
        id: 'WebFrame_AD7DDC6B_BF73_A5E7_41D8_204AE0287090',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_65B0791F_75BE_89EF_41D0_8F9C8F1D38AB'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 3.34,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Up-01' },
            vfov: 2.31,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
            pitch: -5.57,
            yaw: 0.19
          }
        ],
        id: 'overlay_9345117B_9E87_15D1_41DF_88ED8BC27934',
        data: { label: 'btn-Up-01', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7AF9C976_75BF_8830_41B9_8296DF821BD2'
        ],
        items: [
          {
            hfov: 1.85,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-playvideo' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2F4AF_7599_B8D0_41DA_5D853AE48CAA',
            pitch: 0.33,
            yaw: 5.49
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-playvideo' },
        useHandCursor: true,
        maps: [],
        id: 'overlay_9345017B_9E87_15D1_41D5_D47CBD5C9C77'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7AC71A16_75BF_8BF0_41D8_598D493731E5'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 1.9,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Dw' },
            vfov: 1.16,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E344AF_7599_B8D0_41D6_4914B2DF62B1',
            pitch: -6.6,
            yaw: 0.22
          }
        ],
        id: 'overlay_9345317B_9E87_15D1_41D7_0393160B3579',
        data: { label: 'btn-Dw', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_65CD77B9_75B6_9833_41DA_043E552BA957'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 3.34,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Up-01' },
            vfov: 2.31,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
            pitch: -5.55,
            yaw: 0.4
          }
        ],
        id: 'overlay_935E3477_9E89_73D1_41E0_DD2C7DDFD0C8',
        data: { label: 'btn-Up-01', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7A6F9374_75B6_9831_41C3_0E20BCF7E942'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 1.9,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Dw' },
            vfov: 1.16,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E344AF_7599_B8D0_41D6_4914B2DF62B1',
            pitch: -6.71,
            yaw: 0.41
          }
        ],
        id: 'overlay_935EC477_9E89_73D1_41C8_D8299641296B',
        data: { label: 'btn-Dw', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_92D69DBE_9E8B_0D50_41CD_7BE616EDABE1'
        ],
        items: [
          {
            hfov: 1.51,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-ingredients' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
            pitch: -0.64,
            yaw: 6.63
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-ingredients' },
        enabledInCardboard: true,
        useHandCursor: true,
        maps: [],
        id: 'overlay_935ED477_9E89_73D1_41E1_FDF58ABA5193'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7AACE1E4_75BB_9850_41DB_13DE57A7E88B'
        ],
        items: [
          {
            hfov: 1.85,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-playvideo' },
            vfov: 1.32,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2F4AF_7599_B8D0_41DA_5D853AE48CAA',
            pitch: 0.26,
            yaw: -5.11
          }
        ],
        class: 'HotspotPanoramaOverlay',
        data: { label: 'btn-playvideo' },
        useHandCursor: true,
        maps: [],
        id: 'overlay_90788B51_9E87_15D1_41E2_12203B44E946'
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7B004AEA_75BA_8850_41DA_97854E7872A6'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 3.34,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Up-01' },
            vfov: 2.31,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
            pitch: -5.38,
            yaw: 0.36
          }
        ],
        id: 'overlay_90727B51_9E87_15D1_41D8_3FBDD2EA6A22',
        data: { label: 'btn-Up-01', hasPanoramaAction: true }
      },
      {
        areas: [
          'this.HotspotPanoramaOverlayArea_7B5820F3_75B9_B830_41D9_6653DF06C4C5'
        ],
        maps: [],
        class: 'HotspotPanoramaOverlay',
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            hfov: 1.9,
            class: 'HotspotPanoramaOverlayImage',
            scaleMode: 'fit_inside',
            data: { label: 'btn-Dw' },
            vfov: 1.16,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            distance: 50,
            image: 'this.res_64E344AF_7599_B8D0_41D6_4914B2DF62B1',
            pitch: -6.5,
            yaw: 0.35
          }
        ],
        id: 'overlay_90726B51_9E87_15D1_41D6_CA7960CBA3DD',
        data: { label: 'btn-Dw', hasPanoramaAction: true }
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33954' },
        id: 'WebFrame_AD7AFC6A_BF73_A5E1_41DA_5F24A5D92EA6',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        media: 'this.panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40',
        class: 'PanoramaPlayListItem',
        begin: 'this.setEndToItemIndex(this.mainPlayList, 0, 1)',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_AD7FCC6D_BF73_A5E3_41E2_1377803D1443',
        camera: 'this.panorama_79A25C10_7597_8FF0_41D5_58B98AF17C40_camera'
      },
      {
        media: 'this.panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C',
        class: 'PanoramaPlayListItem',
        begin: 'this.setEndToItemIndex(this.mainPlayList, 3, 4)',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_AD7A3C6C_BF73_A5E1_41E4_8E3DE2B564DE',
        camera: 'this.panorama_938DB4E5_9E86_FCF1_41E3_CAE1B5FAE71C_camera'
      },
      {
        backgroundColorDirection: 'vertical',
        data: { name: 'WebFrame33956' },
        id: 'WebFrame_AD7A4C6B_BF73_A5E7_41DA_3BC76F0E9ED7',
        borderRadius: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        toolTipHorizontalAlign: 'center',
        insetBorder: false,
        scrollEnabled: true,
        borderSize: 0,
        backgroundColor: [],
        class: 'WebFrame',
        backgroundColorRatios: [],
        backgroundOpacity: 1,
        minHeight: 0,
        height: '100%',
        minWidth: 0,
        propagateClick: false,
        shadow: false,
        paddingTop: 0,
        paddingBottom: 0
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 2)",
        id: 'HotspotPanoramaOverlayArea_65A040D0_75BE_B871_41C6_12E28F60215E',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_64E344AF_7599_B8D0_41D6_4914B2DF62B1',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_64E344AF_7599_B8D0_41D6_4914B2DF62B1_0.png',
            width: 383,
            class: 'ImageResourceLevel',
            height: 234
          }
        ],
        class: 'ImageResource'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 5)",
        id: 'HotspotPanoramaOverlayArea_7AE8F4A6_75B9_F8D0_41C2_D94037637538',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_64E2E4AF_7599_B8D0_41D5_1D585D0D2FFD_0.png',
            width: 556,
            class: 'ImageResourceLevel',
            height: 340
          }
        ],
        class: 'ImageResource'
      },
      {
        click:
          "this.WebFrame_AD7DDC6B_BF73_A5E7_41D8_204AE0287090.set('url', this.translate('PopupWebFrameBehaviour_AE70C6D4_BC90_A520_41D1_73B0EB72D21E.url')); this.showWindow(this.window_AE7086D4_BC90_A520_41E3_C919D4D3D8B6, null, false)",
        id: 'HotspotPanoramaOverlayArea_7A2E6513_75BA_B9F7_41C8_AAD53BF814C3',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_64E2F4AF_7599_B8D0_41DA_5D853AE48CAA',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_64E2F4AF_7599_B8D0_41DA_5D853AE48CAA_0.png',
            width: 160,
            class: 'ImageResourceLevel',
            height: 160
          }
        ],
        class: 'ImageResource'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 4)",
        id: 'HotspotPanoramaOverlayArea_92F97B2E_9E89_1573_41D4_F2D0E75EDD33',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_924E9CFF_9E9B_0CD1_41C7_8F829E5637E4_0.png',
            width: 240,
            class: 'ImageResourceLevel',
            height: 240
          }
        ],
        class: 'ImageResource'
      },
      {
        rollOut:
          'this.setOverlaysVisibility([this.overlay_79A2AC10_7597_8FF0_4199_2A6D3D6EDC32], true)',
        id: 'HotspotPanoramaOverlayArea_301BE184_3D70_74B3_41A4_567423859E6B',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_3336D051_3D70_1452_41CA_E7C48808924E',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_3336D051_3D70_1452_41CA_E7C48808924E_0.png',
            width: 608,
            class: 'ImageResourceLevel',
            height: 104
          }
        ],
        class: 'ImageResource'
      },
      {
        id: 'HotspotPanoramaOverlayArea_300693B9_3D70_74D5_41C5_35FDA9AA40DF',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_33370052_3D70_1456_41BF_00A11C6D80A4',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_33370052_3D70_1456_41BF_00A11C6D80A4_0.png',
            width: 684,
            class: 'ImageResourceLevel',
            height: 102
          }
        ],
        class: 'ImageResource'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 1)",
        // click:
        //   "this.mainPlayList.set('selectedIndex', 1);window.dataLayer.push({'event':'virtualExpEnter'})",
        id: 'HotspotPanoramaOverlayArea_78658C74_75B6_8830_41D8_70E64D11EA15',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "this.WebFrame_AD7AFC6A_BF73_A5E1_41DA_5F24A5D92EA6.set('url', this.translate('PopupWebFrameBehaviour_AE4BDE59_BD70_E520_41D6_2CCAE4831CEC.url')); this.showWindow(this.window_AE4BBE59_BD70_E520_41DD_40A4A3C24EDE, null, false)",
        id: 'HotspotPanoramaOverlayArea_7BC88519_75B9_B9F0_41CF_B9A7EDAA9316',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'HotspotPanoramaOverlayArea_B3B2D1A8_BC90_5F60_41E3_C28CFAF0B9AC',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_ADE05013_BC8F_DD27_41E4_8628349925D2',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_ADE05013_BC8F_DD27_41E4_8628349925D2_0.jpg',
            width: 1131,
            class: 'ImageResourceLevel',
            height: 675
          }
        ],
        class: 'ImageResource'
      },
      {
        click:
          "window.dataLayer.push({'event':'virtualExpEnter'});this.setOverlaysVisibility([this.overlay_B3B9D179_BC90_5FE0_41D9_11F67C709F9C], false); this.setOverlaysVisibility([this.overlay_7A9CFBBA_75B6_8831_41B3_20DD32AA47CA,this.overlay_7A58046E_75B9_B850_41CC_E0531701F76C], true)",
        id: 'HotspotPanoramaOverlayArea_7B8EF7A0_7589_B8D0_41DC_11CF6AD26E2D',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image'
      },
      {
        // click:
        //   "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD7FCC6D_BF73_A5E3_41E2_1377803D1443, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)",
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD7FCC6D_BF73_A5E3_41E2_1377803D1443, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); window.location.href = '/artwork/instruction'",
        id: 'HotspotPanoramaOverlayArea_642973B7_759E_B830_4164_9EB8A57678A8',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 5)",
        id: 'HotspotPanoramaOverlayArea_65359D39_759E_8830_4154_CAAB2E8F25E7',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          // "this.showPopupPanoramaOverlay(this.popup_656D3D17_759F_89FF_41D5_B2AFEBA255EC, {'iconColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingBottom':5,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'rollOverBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'iconHeight':20,'rollOverIconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'pressedBorderSize':0,'iconWidth':20,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'rollOverBorderColor':'#000000','paddingRight':5,'borderRadius':0,'pressedIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000'}, this.res_64E3D4AF_7599_B8D0_41D5_5C7C360396A1, null, null, null, false)",
          "window.dataLayer.push({'event':'virtualExpClickCollect'}); this.openLink(this.translate('LinkBehaviour_9B1DEB4D_3B7D_4BAD_9BDD_2B0D7B3DCB6D.source'), '_blank')",
        id: 'HotspotPanoramaOverlayArea_924AE16C_9E89_15F0_41E0_20CD6DA0E399',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "window.dataLayer.push({'event':'virtualExpVirtualTasting'});this.openLink(this.translate('LinkBehaviour_AEB209D9_BCB3_AF20_41E4_047170E281C0.source'), '_blank')",
        id: 'HotspotPanoramaOverlayArea_92A61BE7_9E8B_74F1_41B1_6A3E819AB81F',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD7A3C6C_BF73_A5E1_41E4_8E3DE2B564DE, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)",
        id: 'HotspotPanoramaOverlayArea_6409160C_759E_FBD0_41DA_6DE408E24971',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        id: 'res_64E3C4AF_7599_B8D0_41C1_9B35577BEB85',
        levels: [
          {
            url: 'https://storage.googleapis.com/macallan-dev.appspot.com/mc3_virtual/media/res_64E3C4AF_7599_B8D0_41C1_9B35577BEB85_0.png',
            width: 160,
            class: 'ImageResourceLevel',
            height: 160
          }
        ],
        class: 'ImageResource'
      },
      {
        click:
          "this.WebFrame_AD7D7C6C_BF73_A5E1_4167_4EFC92280EC7.set('url', this.translate('PopupWebFrameBehaviour_A9F89B90_BC91_E320_41CC_DFE9F8BD5BB6.url')); this.showWindow(this.window_A9F85B91_BC91_E320_41E7_1EB25170BEDA, null, false); window.dataLayer.push({'event':'virtualExpTaste'})",
        id: 'HotspotPanoramaOverlayArea_923B1328_9E89_157F_41D3_5FC65ED1C22D',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "this.WebFrame_AD7C4C6C_BF73_A5E1_41E5_B83C581DD1F6.set('url', this.translate('PopupWebFrameBehaviour_AE42D499_BC90_A523_41CF_163F8B1101BC.url')); this.showWindow(this.window_AE3D1499_BC90_A523_41E2_BAE5A149DD00, null, false); window.dataLayer.push({'event':'virtualExpTaste'})",
        id: 'HotspotPanoramaOverlayArea_92EFF326_9E89_3573_41DD_2CEA914898A2',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "this.WebFrame_AD7FAC6C_BF73_A5E1_41DE_D215CED963D6.set('url', this.translate('PopupWebFrameBehaviour_AE61A92B_BC90_AF67_41E5_2E14C557A7F0.url')); this.showWindow(this.window_AE60592B_BC90_AF67_41E2_92A871F7B288, null, false); window.dataLayer.push({'event':'virtualExpTaste'})",
        id: 'HotspotPanoramaOverlayArea_921821EC_9E89_14F7_41CB_8026DDECC1EC',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 3)",
        id: 'HotspotPanoramaOverlayArea_65B0791F_75BE_89EF_41D0_8F9C8F1D38AB',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "this.WebFrame_AD7A4C6B_BF73_A5E7_41DA_3BC76F0E9ED7.set('url', this.translate('PopupWebFrameBehaviour_AE107AA3_BC97_AD60_41D5_0FCE4B08A06A.url')); this.showWindow(this.window_AE100AA3_BC97_AD60_41C8_EAF03D040492, null, false);window.dataLayer.push({'event':'virtualExpMastery'})",
        id: 'HotspotPanoramaOverlayArea_7AF9C976_75BF_8830_41B9_8296DF821BD2',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 1)",
        id: 'HotspotPanoramaOverlayArea_7AC71A16_75BF_8BF0_41D8_598D493731E5',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 6)",
        id: 'HotspotPanoramaOverlayArea_65CD77B9_75B6_9833_41DA_043E552BA957',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 3)",
        id: 'HotspotPanoramaOverlayArea_7A6F9374_75B6_9831_41C3_0E20BCF7E942',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "window.dataLayer.push({'event':'virtualExpCreateYourOwn'}); this.openLink(this.translate('LinkBehaviour_AE26914D_BCB0_7F20_41CE_5003CB132CA1.source'), '_blank')",
        id: 'HotspotPanoramaOverlayArea_92D69DBE_9E8B_0D50_41CD_7BE616EDABE1',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click:
          "this.WebFrame_AD7A3C6B_BF73_A5E7_41E6_89B9211D8F03.set('url', this.translate('PopupWebFrameBehaviour_AE2056B6_BC90_A560_41C9_02B5FF38E631.url')); this.showWindow(this.window_AE2016B7_BC90_A560_41E0_E0C1B15006BA, null, false); window.dataLayer.push({'event':'virtualExpPlace'})",
        id: 'HotspotPanoramaOverlayArea_7AACE1E4_75BB_9850_41DB_13DE57A7E88B',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 2)",
        id: 'HotspotPanoramaOverlayArea_7B004AEA_75BA_8850_41DA_97854E7872A6',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      },
      {
        click: "this.mainPlayList.set('selectedIndex', 0)",
        id: 'HotspotPanoramaOverlayArea_7B5820F3_75B9_B830_41D9_6653DF06C4C5',
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any'
      }
    ],
    desktopMipmappingEnabled: false,
    data: {
      name: 'Player953',
      defaultLocale: 'en',
      textToSpeechConfig: {
        rate: 1,
        stopBackgroundAudio: false,
        pitch: 1,
        speechOnQuizQuestion: false,
        speechOnTooltip: false,
        volume: 1,
        speechOnInfoWindow: false
      },
      locales: { en: 'locale/en.txt' }
    },
    width: '100%',
    paddingRight: 0,
    toolTipHorizontalAlign: 'center',
    overflow: 'hidden',
    mediaActivationMode: 'window',
    horizontalAlign: 'left',
    borderSize: 0,
    backgroundColor: ['#FFFFFF'],
    class: 'Player',
    backgroundColorRatios: [0],
    layout: 'absolute',
    backgroundOpacity: 1,
    scrollBarVisible: 'rollOver',
    backgroundPreloadEnabled: true,
    minHeight: 20,
    scripts: {
      getMediaFromPlayer: TDV.Tour.Script.getMediaFromPlayer,
      getCurrentPlayerWithMedia: TDV.Tour.Script.getCurrentPlayerWithMedia,
      changePlayListWithSameSpot: TDV.Tour.Script.changePlayListWithSameSpot,
      _initTwinsViewer: TDV.Tour.Script._initTwinsViewer,
      updateMediaLabelFromPlayList:
        TDV.Tour.Script.updateMediaLabelFromPlayList,
      setMapLocation: TDV.Tour.Script.setMapLocation,
      setComponentsVisibilityByTags:
        TDV.Tour.Script.setComponentsVisibilityByTags,
      loadFromCurrentMediaPlayList:
        TDV.Tour.Script.loadFromCurrentMediaPlayList,
      _initSplitViewer: TDV.Tour.Script._initSplitViewer,
      setOverlaysVisibility: TDV.Tour.Script.setOverlaysVisibility,
      updateVideoCues: TDV.Tour.Script.updateVideoCues,
      changeOpacityWhilePlay: TDV.Tour.Script.changeOpacityWhilePlay,
      setStartTimeVideoSync: TDV.Tour.Script.setStartTimeVideoSync,
      clone: TDV.Tour.Script.clone,
      setOverlayBehaviour: TDV.Tour.Script.setOverlayBehaviour,
      getComponentsByTags: TDV.Tour.Script.getComponentsByTags,
      historyGoForward: TDV.Tour.Script.historyGoForward,
      setValue: TDV.Tour.Script.setValue,
      getPixels: TDV.Tour.Script.getPixels,
      showWindow: TDV.Tour.Script.showWindow,
      setMediaBehaviour: TDV.Tour.Script.setMediaBehaviour,
      init: TDV.Tour.Script.init,
      setComponentVisibility: TDV.Tour.Script.setComponentVisibility,
      historyGoBack: TDV.Tour.Script.historyGoBack,
      getActivePlayerWithViewer: TDV.Tour.Script.getActivePlayerWithViewer,
      textToSpeech: TDV.Tour.Script.textToSpeech,
      updateDeepLink: TDV.Tour.Script.updateDeepLink,
      getPlayListItemByMedia: TDV.Tour.Script.getPlayListItemByMedia,
      getPanoramaOverlaysByTags: TDV.Tour.Script.getPanoramaOverlaysByTags,
      getPlayListsWithMedia: TDV.Tour.Script.getPlayListsWithMedia,
      setCameraSameSpotAsMedia: TDV.Tour.Script.setCameraSameSpotAsMedia,
      mixObject: TDV.Tour.Script.mixObject,
      showPopupPanoramaVideoOverlay:
        TDV.Tour.Script.showPopupPanoramaVideoOverlay,
      triggerOverlay: TDV.Tour.Script.triggerOverlay,
      setLocale: TDV.Tour.Script.setLocale,
      quizFinish: TDV.Tour.Script.quizFinish,
      getMainViewer: TDV.Tour.Script.getMainViewer,
      showPopupPanoramaOverlay: TDV.Tour.Script.showPopupPanoramaOverlay,
      _initTTSTooltips: TDV.Tour.Script._initTTSTooltips,
      setStartTimeVideo: TDV.Tour.Script.setStartTimeVideo,
      quizStart: TDV.Tour.Script.quizStart,
      sendAnalyticsData: TDV.Tour.Script.sendAnalyticsData,
      changeBackgroundWhilePlay: TDV.Tour.Script.changeBackgroundWhilePlay,
      getKey: TDV.Tour.Script.getKey,
      initQuiz: TDV.Tour.Script.initQuiz,
      quizShowTimeout: TDV.Tour.Script.quizShowTimeout,
      quizShowQuestion: TDV.Tour.Script.quizShowQuestion,
      getPanoramaOverlayByName: TDV.Tour.Script.getPanoramaOverlayByName,
      pauseGlobalAudio: TDV.Tour.Script.pauseGlobalAudio,
      quizShowScore: TDV.Tour.Script.quizShowScore,
      assignObjRecursively: TDV.Tour.Script.assignObjRecursively,
      stopTextToSpeech: TDV.Tour.Script.stopTextToSpeech,
      _initItemWithComps: TDV.Tour.Script._initItemWithComps,
      setMainMediaByName: TDV.Tour.Script.setMainMediaByName,
      getActiveMediaWithViewer: TDV.Tour.Script.getActiveMediaWithViewer,
      showPopupImage: TDV.Tour.Script.showPopupImage,
      setMainMediaByIndex: TDV.Tour.Script.setMainMediaByIndex,
      openLink: TDV.Tour.Script.openLink,
      getMediaByTags: TDV.Tour.Script.getMediaByTags,
      quizSetItemFound: TDV.Tour.Script.quizSetItemFound,
      setSurfaceSelectionHotspotMode:
        TDV.Tour.Script.setSurfaceSelectionHotspotMode,
      existsKey: TDV.Tour.Script.existsKey,
      autotriggerAtStart: TDV.Tour.Script.autotriggerAtStart,
      getPlayListItems: TDV.Tour.Script.getPlayListItems,
      setPanoramaCameraWithSpot: TDV.Tour.Script.setPanoramaCameraWithSpot,
      getMediaByName: TDV.Tour.Script.getMediaByName,
      getComponentByName: TDV.Tour.Script.getComponentByName,
      keepCompVisible: TDV.Tour.Script.keepCompVisible,
      getOverlaysByTags: TDV.Tour.Script.getOverlaysByTags,
      playGlobalAudio: TDV.Tour.Script.playGlobalAudio,
      executeFunctionWhenChange: TDV.Tour.Script.executeFunctionWhenChange,
      textToSpeechComponent: TDV.Tour.Script.textToSpeechComponent,
      isPanorama: TDV.Tour.Script.isPanorama,
      setPanoramaCameraWithCurrentSpot:
        TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,
      pauseGlobalAudiosWhilePlayItem:
        TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,
      unregisterKey: TDV.Tour.Script.unregisterKey,
      stopGlobalAudio: TDV.Tour.Script.stopGlobalAudio,
      setEndToItemIndex: TDV.Tour.Script.setEndToItemIndex,
      pauseCurrentPlayers: TDV.Tour.Script.pauseCurrentPlayers,
      showPopupMedia: TDV.Tour.Script.showPopupMedia,
      getGlobalAudio: TDV.Tour.Script.getGlobalAudio,
      showComponentsWhileMouseOver:
        TDV.Tour.Script.showComponentsWhileMouseOver,
      syncPlaylists: TDV.Tour.Script.syncPlaylists,
      registerKey: TDV.Tour.Script.registerKey,
      openEmbeddedPDF: TDV.Tour.Script.openEmbeddedPDF,
      stopGlobalAudios: TDV.Tour.Script.stopGlobalAudios,
      getFirstPlayListWithMedia: TDV.Tour.Script.getFirstPlayListWithMedia,
      getOverlays: TDV.Tour.Script.getOverlays,
      getCurrentPlayers: TDV.Tour.Script.getCurrentPlayers,
      _getObjectsByTags: TDV.Tour.Script._getObjectsByTags,
      playGlobalAudioWhilePlay: TDV.Tour.Script.playGlobalAudioWhilePlay,
      resumeGlobalAudios: TDV.Tour.Script.resumeGlobalAudios,
      stopAndGoCamera: TDV.Tour.Script.stopAndGoCamera,
      shareSocial: TDV.Tour.Script.shareSocial,
      copyToClipboard: TDV.Tour.Script.copyToClipboard,
      startPanoramaWithCamera: TDV.Tour.Script.startPanoramaWithCamera,
      isCardboardViewMode: TDV.Tour.Script.isCardboardViewMode,
      initAnalytics: TDV.Tour.Script.initAnalytics,
      copyObjRecursively: TDV.Tour.Script.copyObjRecursively,
      resumePlayers: TDV.Tour.Script.resumePlayers,
      playAudioList: TDV.Tour.Script.playAudioList,
      getMediaHeight: TDV.Tour.Script.getMediaHeight,
      translate: TDV.Tour.Script.translate,
      setOverlaysVisibilityByTags: TDV.Tour.Script.setOverlaysVisibilityByTags,
      visibleComponentsIfPlayerFlagEnabled:
        TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,
      getPlayListWithItem: TDV.Tour.Script.getPlayListWithItem,
      getMediaWidth: TDV.Tour.Script.getMediaWidth,
      fixTogglePlayPauseButton: TDV.Tour.Script.fixTogglePlayPauseButton,
      pauseGlobalAudios: TDV.Tour.Script.pauseGlobalAudios,
      cloneCamera: TDV.Tour.Script.cloneCamera,
      skip3DTransitionOnce: TDV.Tour.Script.skip3DTransitionOnce,
      htmlToPlainText: TDV.Tour.Script.htmlToPlainText,
      _getPlayListsWithViewer: TDV.Tour.Script._getPlayListsWithViewer
    },
    height: '100%',
    minWidth: 20,
    propagateClick: false,
    vrPolyfillScale: 0.75,
    scrollBarWidth: 10,
    mouseWheelEnabled: true,
    scrollBarOpacity: 0.5,
    shadow: false,
    scrollBarColor: '#000000',
    paddingTop: 0,
    contentOpaque: false,
    mobileMipmappingEnabled: false,
    defaultVRPointer: 'laser',
    paddingBottom: 0
  };
  if (b['data'] == undefined) b['data'] = {};
  b['data']['translateObjs'] = a;
  b['data']['history'] = {};
  b['scripts']['createQuizConfig'] = createQuizConfig;
  TDV['PlayerAPI']['defineScript'](b);
})();
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.2.js.map
//Generated with v2021.1.2, Mon Jul 19 2021
