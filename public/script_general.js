(function () {
  var c = {};
  function trans(e, f) {
    var g =
      arguments['length'] === 0x1
        ? [arguments[0x0]]
        : Array['apply'](null, arguments);
    c[g[0x0]] = g;
    return '';
  }
  function regTextVar(h, i) {
    var j = ![];
    i = i['toLowerCase']();
    var k = function () {
      var t = this['get']('data');
      t['updateText'](t['translateObjs'][h]);
    };
    var l = function (u) {
      var v = u['data']['nextSelectedIndex'];
      if (v >= 0x0) {
        var w = u['source']['get']('items')[v];
        var x = function () {
          w['unbind']('begin', x, this);
          k['call'](this);
        };
        w['bind']('begin', x, this);
      } else k['call'](this);
    };
    var m = function (y) {
      return function (z) {
        if (y in z) {
          k['call'](this);
        }
      }['bind'](this);
    };
    var n = function (A, B) {
      return function (C, D) {
        if (A == C && B in D) {
          k['call'](this);
        }
      }['bind'](this);
    };
    var o = function (E, F, G) {
      for (var H = 0x0; H < E['length']; ++H) {
        var I = E[H];
        var J = I['get']('selectedIndex');
        if (J >= 0x0) {
          var K = F['split']('.');
          var L = I['get']('items')[J];
          if (G !== undefined && !G['call'](this, L)) continue;
          for (var M = 0x0; M < K['length']; ++M) {
            if (L == undefined) return '';
            L = 'get' in L ? L['get'](K[M]) : L[K[M]];
          }
          return L;
        }
      }
      return '';
    };
    var p = function (N) {
      var O = N['get']('player');
      return (
        O !== undefined && O['get']('viewerArea') == this['getMainViewer']()
      );
    };
    switch (i) {
      case 'title':
      case 'subtitle':
        var r = (function () {
          switch (i) {
            case 'title':
              return 'media.label';
            case 'subtitle':
              return 'media.data.subtitle';
          }
        })();
        if (r) {
          return function () {
            var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
            if (!j) {
              for (var Q = 0x0; Q < P['length']; ++Q) {
                P[Q]['bind']('changing', l, this);
              }
              j = !![];
            }
            return o['call'](this, P, r, p);
          };
        }
        break;
      default:
        if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
          var s = undefined;
          var r = (function () {
            switch (i) {
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
                var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                if (R) {
                  s = R[0x1];
                  switch ('quiz.' + R[0x2]) {
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
          if (r) {
            return function () {
              var S = this['get']('data')['quiz'];
              if (S) {
                if (!j) {
                  if (s != undefined)
                    if (s == 'global') {
                      var U = this['get']('data')['quizConfig'];
                      var W = U['objectives'];
                      for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                        S['bind'](
                          TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'],
                          n['call'](this, W[Y]['id'], r),
                          this
                        );
                      }
                    } else {
                      S['bind'](
                        TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'],
                        n['call'](this, s, r),
                        this
                      );
                    }
                  else
                    S['bind'](
                      TDV['Quiz']['EVENT_PROPERTIES_CHANGE'],
                      m['call'](this, r),
                      this
                    );
                  j = !![];
                }
                try {
                  var a1 = 0x0;
                  if (s != undefined) {
                    if (s == 'global') {
                      var U = this['get']('data')['quizConfig'];
                      var W = U['objectives'];
                      for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                        a1 += S['getObjective'](W[Y]['id'], r);
                      }
                    } else {
                      a1 = S['getObjective'](s, r);
                    }
                  } else {
                    a1 = S['get'](r);
                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                      a1 += 0x1;
                  }
                  return a1;
                } catch (a2) {
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
  function createQuizConfig(player, a3) {
    var a4 = {};
    a4['player'] = player;
    a4['playList'] = a3;
    function a5(a8) {
      for (var a9 = 0x0; a9 < a8['length']; ++a9) {
        var aa = a8[a9];
        if ('id' in aa) player[aa['id']] = aa;
      }
    }
    if (a4['questions']) {
      a5(a4['questions']);
      for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
        var a7 = a4['questions'][a6];
        a5(a7['options']);
      }
    }
    if (a4['objectives']) {
      a5(a4['objectives']);
    }
    if (a4['califications']) {
      a5(a4['califications']);
    }
    if (a4['score']) {
      player[a4['score']['id']] = a4['score'];
    }
    if (a4['question']) {
      player[a4['question']['id']] = a4['question'];
    }
    if (a4['timeout']) {
      player[a4['timeout']['id']] = a4['timeout'];
    }
    player['get']('data')['translateObjs'] = c;
    return a4;
  }
  var d = {
    vrPolyfillScale: 0.75,
    paddingBottom: 0,
    id: 'rootPlayer',
    scrollBarMargin: 2,
    overflow: 'hidden',
    paddingLeft: 0,
    toolTipHorizontalAlign: 'center',
    propagateClick: false,
    children: [
      'this.MainViewer',
      'this.veilPopupPanorama',
      'this.zoomImagePopupPanorama',
      'this.closeButtonPopupPanorama'
    ],
    backgroundOpacity: 1,
    gap: 10,
    start: 'this.init()',
    paddingRight: 0,
    verticalAlign: 'top',
    scrollBarWidth: 10,
    mediaActivationMode: 'window',
    horizontalAlign: 'left',
    borderSize: 0,
    scrollBarVisible: 'rollOver',
    scrollBarOpacity: 0.5,
    downloadEnabled: false,
    desktopMipmappingEnabled: false,
    mobileMipmappingEnabled: false,
    backgroundColor: ['#FFFFFF'],
    layout: 'absolute',
    width: '100%',
    height: '100%',
    class: 'Player',
    defaultVRPointer: 'laser',
    minHeight: 20,
    scrollBarColor: '#000000',
    minWidth: 20,
    borderRadius: 0,
    shadow: false,
    contentOpaque: false,
    definitions: [
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052.label'),
        id: 'panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_136F4C6D_0FD9_FD87_4174_BD084F0F7E48',
          'this.overlay_136F7C6D_0FD9_FD87_41B6_A314FCD00AD2',
          'this.overlay_136F6C6D_0FD9_FD87_41B0_C984054ECA1D',
          'this.overlay_136F9C6D_0FD9_FD87_41A1_A33743CD0C15',
          'this.popup_E3835F8B_FAD4_B233_41EC_A5CDC5D33ADF',
          'this.popup_E315C46F_FAD4_D6F3_41CD_9E16A3998463',
          'this.popup_E371A1DF_FAD4_B1D3_41D7_2E47FA7406ED'
        ],
        thumbnailUrl:
          'media/panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'image (6)'
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87',
            distance: 100,
            class: 'AdjacentPanorama',
            yaw: 12.25,
            select:
              "this.overlay_136F4C6D_0FD9_FD87_4174_BD084F0F7E48.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_E3835F8B_FAD4_B233_41EC_A5CDC5D33ADF',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: -2.96,
        rotationZ: 0,
        hfov: 1.53,
        yaw: 2.64,
        popupDistance: 100,
        showDuration: 500
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_camera',
        automaticZoomSpeed: 10
      },
      {
        gyroscopeEnabled: true,
        surfaceSelectionEnabled: false,
        zoomEnabled: true,
        class: 'PanoramaPlayer',
        id: 'MainViewerPanoramaPlayer',
        gyroscopeVerticalDraggingEnabled: true,
        mouseControlMode: 'drag_rotation',
        viewerArea: 'this.MainViewer',
        displayPlaybackBar: true,
        touchControlMode: 'drag_rotation',
        aaEnabled: true,
        arrowKeysAction: 'translate'
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_camera',
        automaticZoomSpeed: 10
      },
      {
        subtitlesFontColor: '#FFFFFF',
        subtitlesTextShadowOpacity: 1,
        progressRight: 0,
        id: 'MainViewer',
        toolTipShadowOpacity: 1,
        playbackBarBorderRadius: 0,
        playbackBarHeadBackgroundColorRatios: [0, 1],
        playbackBarBorderColor: '#FFFFFF',
        progressBarBorderSize: 0,
        playbackBarProgressBorderColor: '#000000',
        playbackBarHeadBorderSize: 0,
        subtitlesFontWeight: 'normal',
        progressOpacity: 1,
        playbackBarHeadShadowHorizontalLength: 0,
        toolTipFontWeight: 'normal',
        width: '100%',
        subtitlesPaddingLeft: 5,
        playbackBarHeadBorderRadius: 0,
        surfaceReticleSelectionOpacity: 1,
        playbackBarHeadShadowVerticalLength: 0,
        subtitlesPaddingRight: 5,
        borderSize: 0,
        subtitlesBottom: 50,
        playbackBarHeadOpacity: 1,
        progressBackgroundColorRatios: [0],
        progressBorderRadius: 0,
        subtitlesTop: 0,
        playbackBarHeadShadow: true,
        playbackBarProgressOpacity: 1,
        subtitlesTextShadowColor: '#000000',
        playbackBarHeadBorderColor: '#000000',
        class: 'ViewerArea',
        toolTipBorderRadius: 3,
        progressLeft: 0,
        height: '100%',
        surfaceReticleColor: '#FFFFFF',
        firstTransitionDuration: 0,
        playbackBarBorderSize: 0,
        toolTipPaddingBottom: 4,
        subtitlesFontSize: '3vmin',
        playbackBarOpacity: 1,
        shadow: false,
        progressBarBackgroundColorDirection: 'vertical',
        playbackBarHeadBackgroundColor: ['#111111', '#666666'],
        toolTipShadowHorizontalLength: 0,
        subtitlesBackgroundOpacity: 0.2,
        surfaceReticleOpacity: 0.6,
        subtitlesEnabled: true,
        subtitlesPaddingBottom: 5,
        toolTipTextShadowOpacity: 0,
        displayTooltipInTouchScreens: true,
        vrPointerColor: '#FFFFFF',
        vrPointerSelectionTime: 2000,
        progressBarBorderColor: '#000000',
        toolTipDisplayTime: 600,
        paddingTop: 0,
        playbackBarBottom: 5,
        progressBackgroundOpacity: 1,
        playbackBarBackgroundOpacity: 1,
        paddingBottom: 0,
        playbackBarProgressBackgroundColorDirection: 'vertical',
        toolTipFontColor: '#606060',
        toolTipShadowColor: '#333333',
        toolTipShadowBlurRadius: 3,
        progressBarBackgroundColorRatios: [0],
        subtitlesBorderColor: '#FFFFFF',
        transitionMode: 'blending',
        toolTipTextShadowBlurRadius: 3,
        playbackBarHeight: 10,
        toolTipTextShadowColor: '#000000',
        progressBackgroundColorDirection: 'vertical',
        playbackBarBackgroundColor: ['#FFFFFF'],
        paddingLeft: 0,
        playbackBarHeadBackgroundColorDirection: 'vertical',
        toolTipHorizontalAlign: 'center',
        subtitlesTextDecoration: 'none',
        toolTipBorderSize: 1,
        playbackBarProgressBorderSize: 0,
        playbackBarHeadWidth: 6,
        paddingRight: 0,
        transitionDuration: 500,
        subtitlesTextShadowBlurRadius: 0,
        toolTipFontSize: '1.11vmin',
        displayTooltipInSurfaceSelection: true,
        toolTipPaddingTop: 4,
        playbackBarBackgroundColorDirection: 'vertical',
        progressBorderColor: '#000000',
        subtitlesTextShadowVerticalLength: 1,
        toolTipShadowSpread: 0,
        progressBarBackgroundColor: ['#3399FF'],
        toolTipBorderColor: '#767676',
        playbackBarRight: 0,
        toolTipPaddingLeft: 6,
        playbackBarProgressBackgroundColor: ['#3399FF'],
        playbackBarProgressBorderRadius: 0,
        progressBackgroundColor: ['#FFFFFF'],
        subtitlesShadow: false,
        subtitlesFontFamily: 'Arial',
        subtitlesPaddingTop: 5,
        toolTipOpacity: 1,
        surfaceReticleSelectionColor: '#FFFFFF',
        playbackBarHeadShadowOpacity: 0.7,
        toolTipShadowVerticalLength: 0,
        minHeight: 50,
        subtitlesOpacity: 1,
        progressBarOpacity: 1,
        minWidth: 100,
        subtitlesTextShadowHorizontalLength: 1,
        progressBottom: 0,
        borderRadius: 0,
        subtitlesGap: 0,
        playbackBarHeadShadowBlurRadius: 3,
        subtitlesBackgroundColor: '#000000',
        progressHeight: 10,
        doubleClickAction: 'toggle_fullscreen',
        subtitlesHorizontalAlign: 'center',
        progressBorderSize: 0,
        subtitlesVerticalAlign: 'bottom',
        playbackBarLeft: 0,
        toolTipFontFamily: 'Arial',
        vrPointerSelectionColor: '#FF6600',
        progressBarBorderRadius: 0,
        toolTipPaddingRight: 6,
        data: {
          name: 'Main Viewer'
        },
        toolTipFontStyle: 'normal',
        playbackBarHeadShadowColor: '#000000',
        playbackBarProgressBackgroundColorRatios: [0],
        playbackBarHeadHeight: 15,
        subtitlesBorderSize: 0,
        propagateClick: false,
        toolTipBackgroundColor: '#F6F6F6'
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_EEA48373_F9F4_72D3_41E0_334EC953F861',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: 0.6,
        rotationZ: 0,
        hfov: 0.74,
        yaw: 6.64,
        popupDistance: 100,
        showDuration: 500
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_EEB46521_F9F4_F66F_41A9_5BB85AB3C191',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: 0.07,
        rotationZ: 0,
        hfov: 0.74,
        yaw: 5.21,
        popupDistance: 100,
        showDuration: 500
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_EE936120_F9F7_AE6D_41EA_0915385E24FF',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: -0.12,
        rotationZ: 0,
        hfov: 0.74,
        yaw: 2.95,
        popupDistance: 100,
        showDuration: 500
      },
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF.label'),
        id: 'panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_10854AD5_0FDA_3A86_41AE_217F79EC28EF',
          'this.overlay_1085BAD5_0FDA_3A86_419A_072271A671C6',
          'this.overlay_1085AAD5_0FDA_3A86_41AF_F410523FAFBA',
          'this.popup_07EDBAA1_096A_F94C_4199_918870DA56D4'
        ],
        thumbnailUrl:
          'media/panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'V12_gallery 1_edited'
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB',
            distance: 15.98,
            class: 'AdjacentPanorama',
            yaw: 0.42,
            select:
              "this.overlay_1085BAD5_0FDA_3A86_419A_072271A671C6.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8',
            distance: 13.45,
            class: 'AdjacentPanorama',
            backwardYaw: 1.47,
            yaw: 0.45,
            select:
              "this.overlay_1085AAD5_0FDA_3A86_41AF_F410523FAFBA.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E.label'),
        id: 'panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_1083FCBD_0FD9_FE86_41B0_90EFEE542DF5',
          'this.overlay_1083ECBD_0FD9_FE86_419F_4C62334608C3',
          'this.overlay_109C1CBD_0FD9_FE86_41B5_05D23B8AC6C1',
          'this.overlay_109C0CBD_0FD9_FE86_41B7_5382B72AC766',
          'this.popup_EF61E1F1_F9F7_B1EF_41D5_761E7B0CAF86',
          'this.popup_EE936120_F9F7_AE6D_41EA_0915385E24FF'
        ],
        thumbnailUrl:
          'media/panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'V11_02_CC_Gallery '
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8',
            distance: 15.14,
            class: 'AdjacentPanorama',
            yaw: 0.6,
            select:
              "this.overlay_109C1CBD_0FD9_FE86_41B5_05D23B8AC6C1.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10',
            distance: 12.8,
            class: 'AdjacentPanorama',
            yaw: 0.65,
            select:
              "this.overlay_109C0CBD_0FD9_FE86_41B7_5382B72AC766.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_E315C46F_FAD4_D6F3_41CD_9E16A3998463',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: -3.02,
        rotationZ: 0,
        hfov: 1.53,
        yaw: -4.56,
        popupDistance: 100,
        showDuration: 500
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_EE52B58E_F9F4_B635_41E3_EDACFB231B4D',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: 0.11,
        rotationZ: 0,
        hfov: 0.74,
        yaw: -5.49,
        popupDistance: 100,
        showDuration: 500
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_07EDBAA1_096A_F94C_4199_918870DA56D4',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: 0.14,
        rotationZ: 0,
        hfov: 0.77,
        yaw: -4.83,
        popupDistance: 100,
        showDuration: 500
      },
      {
        class: 'ImageResource',
        id: 'res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        data: {
          type: 'popup'
        },
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EEFBF7C1_F9D4_522F_41EB_76B14D467392_0.jpg',
            width: 767,
            height: 463
          },
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EEFBF7C1_F9D4_522F_41EB_76B14D467392_1.jpg',
            width: 512,
            height: 309
          }
        ]
      },
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10.label'),
        id: 'panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_1057BD40_0FDE_5FFE_41A2_AAFDAD915264',
          'this.overlay_10574D40_0FDE_5FFE_4184_D3D72A166084',
          'this.overlay_10575D40_0FDE_5FFE_41A9_72724CEAD2CB',
          'this.popup_EEA48373_F9F4_72D3_41E0_334EC953F861'
        ],
        thumbnailUrl:
          'media/panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'V11_02_CYO'
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E',
            distance: 15.82,
            class: 'AdjacentPanorama',
            yaw: 0.43,
            select:
              "this.overlay_10574D40_0FDE_5FFE_4184_D3D72A166084.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87',
            distance: 12.98,
            class: 'AdjacentPanorama',
            yaw: 0.52,
            select:
              "this.overlay_10575D40_0FDE_5FFE_41A9_72724CEAD2CB.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB.label'),
        id: 'panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_13734C9E_0FDA_FE85_418D_7FB95FB89526',
          'this.overlay_13736C9E_0FDA_FE85_415E_8A80C10E8A5F',
          'this.overlay_137ECC9E_0FDA_FE85_41B7_5C20FA311C2B',
          'this.popup_EEB46521_F9F4_F66F_41A9_5BB85AB3C191'
        ],
        thumbnailUrl:
          'media/panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'V11_01_Mastery'
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87',
            distance: 15.66,
            class: 'AdjacentPanorama',
            yaw: 0.22,
            select:
              "this.overlay_13736C9E_0FDA_FE85_415E_8A80C10E8A5F.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF',
            distance: 13.09,
            class: 'AdjacentPanorama',
            yaw: 0.23,
            select:
              "this.overlay_137ECC9E_0FDA_FE85_41B7_5C20FA311C2B.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_camera',
        automaticZoomSpeed: 10
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_camera',
        automaticZoomSpeed: 10
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_EF61E1F1_F9F7_B1EF_41D5_761E7B0CAF86',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: -0.33,
        rotationZ: 0,
        hfov: 0.74,
        yaw: -4.29,
        popupDistance: 100,
        showDuration: 500
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_0422D9E5_0976_9AD4_4165_ABC72AD5FB44',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: -0.74,
        rotationZ: 0,
        hfov: 0.65,
        yaw: -0.73,
        popupDistance: 100,
        showDuration: 500
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_camera',
        automaticZoomSpeed: 10
      },
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8.label'),
        id: 'panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_1078F1B6_0FDA_C682_41B5_AB534E040CB1',
          'this.overlay_1399E7AA_0FC9_CA82_41A3_EBBD0CDA4AB5',
          'this.overlay_13A607AB_0FC9_CA83_41A3_CD6F75D354FC',
          'this.popup_0422D9E5_0976_9AD4_4165_ABC72AD5FB44'
        ],
        thumbnailUrl:
          'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'Collaboration with MC3  copy'
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF',
            distance: 43.1,
            class: 'AdjacentPanorama',
            backwardYaw: 0.45,
            yaw: 1.47,
            select:
              "this.overlay_1078F1B6_0FDA_C682_41B5_AB534E040CB1.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF',
            distance: 48.7,
            class: 'AdjacentPanorama',
            backwardYaw: 0.45,
            yaw: 1.1,
            select:
              "this.overlay_1399E7AA_0FC9_CA82_41A3_EBBD0CDA4AB5.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        class: 'PlayList',
        items: [
          {
            begin: 'this.setEndToItemIndex(this.mainPlayList, 0, 1)',
            media: 'this.panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8',
            camera: 'this.panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_camera',
            class: 'PanoramaPlayListItem',
            player: 'this.MainViewerPanoramaPlayer'
          },
          {
            begin: 'this.setEndToItemIndex(this.mainPlayList, 1, 2)',
            media: 'this.panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF',
            camera: 'this.panorama_109B9AD5_0FDA_3A86_41B2_5738C21F16AF_camera',
            class: 'PanoramaPlayListItem',
            player: 'this.MainViewerPanoramaPlayer'
          },
          'this.PanoramaPlayListItem_11DB3776_0FF6_4B85_41BA_C94FC8D89646',
          'this.PanoramaPlayListItem_11D8A778_0FF6_4B8D_4195_29E6C1B81B94',
          'this.PanoramaPlayListItem_11D8077B_0FF6_4B83_41B1_C3C8E1E6D453',
          'this.PanoramaPlayListItem_11D8577A_0FF6_4B8D_41A2_4772B3148561',
          'this.PanoramaPlayListItem_11C6B780_0FF6_4B7D_41A4_C898FAD8F680'
        ],
        id: 'mainPlayList'
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_camera',
        automaticZoomSpeed: 10
      },
      {
        initialPosition: {
          class: 'PanoramaCameraPosition',
          yaw: 0,
          pitch: 0
        },
        class: 'PanoramaCamera',
        id: 'panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_camera',
        automaticZoomSpeed: 10
      },
      {
        hfovMin: '150%',
        vfov: 16.88,
        class: 'Panorama',
        label: trans('panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87.label'),
        id: 'panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87',
        frames: [
          {
            class: 'CubicPanoramaFrame',
            front: {
              class: 'ImageResource',
              levels: [
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/0/{row}_{column}.jpg',
                  colCount: 45,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 23040,
                  rowCount: 45,
                  height: 23040
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/1/{row}_{column}.jpg',
                  colCount: 23,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 11776,
                  rowCount: 23,
                  height: 11776
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/2/{row}_{column}.jpg',
                  colCount: 12,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 6144,
                  rowCount: 12,
                  height: 6144
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/3/{row}_{column}.jpg',
                  colCount: 6,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 3072,
                  rowCount: 6,
                  height: 3072
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/4/{row}_{column}.jpg',
                  colCount: 3,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 3,
                  height: 1536
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/5/{row}_{column}.jpg',
                  colCount: 2,
                  tags: 'ondemand',
                  class: 'TiledImageResourceLevel',
                  width: 1024,
                  rowCount: 2,
                  height: 1024
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/6/{row}_{column}.jpg',
                  colCount: 1,
                  tags: ['ondemand', 'preload'],
                  class: 'TiledImageResourceLevel',
                  width: 512,
                  rowCount: 1,
                  height: 512
                },
                {
                  url: 'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_0/f/vr/0.jpg',
                  colCount: 1,
                  tags: 'mobilevr',
                  class: 'TiledImageResourceLevel',
                  width: 1536,
                  rowCount: 1,
                  height: 1536
                }
              ]
            },
            thumbnailUrl:
              'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_t.jpg'
          }
        ],
        partial: true,
        overlays: [
          'this.overlay_1362A78B_0FDA_4A83_41AA_704E5F5893A0',
          'this.overlay_1362B78B_0FDA_4A83_41A4_F0A0FEFB6081',
          'this.overlay_1362878B_0FDA_4A83_41BB_1BD47E448B2C',
          'this.overlay_136C578C_0FDA_4A85_4190_9CAE7E89B50B',
          'this.popup_EE52B58E_F9F4_B635_41E3_EDACFB231B4D'
        ],
        thumbnailUrl:
          'media/panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_t.jpg',
        pitch: 0,
        hfovMax: 30,
        data: {
          label: 'V11_01_Mastery_taste '
        },
        hfov: 30,
        adjacentPanoramas: [
          {
            panorama: 'this.panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10',
            distance: 15.93,
            class: 'AdjacentPanorama',
            yaw: 0.28,
            select:
              "this.overlay_1362B78B_0FDA_4A83_41A4_F0A0FEFB6081.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB',
            distance: 12.94,
            class: 'AdjacentPanorama',
            yaw: 0.31,
            select:
              "this.overlay_1362878B_0FDA_4A83_41BB_1BD47E448B2C.get('areas').forEach(function(a){ a.trigger('click') })"
          },
          {
            panorama: 'this.panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052',
            distance: 75.58,
            class: 'AdjacentPanorama',
            yaw: -7.96,
            select:
              "this.overlay_136C578C_0FDA_4A85_4190_9CAE7E89B50B.get('areas').forEach(function(a){ a.trigger('click') })"
          }
        ]
      },
      {
        rotationY: 0,
        rotationX: 0,
        hideDuration: 500,
        class: 'PopupPanoramaOverlay',
        popupMaxWidth: '95%',
        id: 'popup_E371A1DF_FAD4_B1D3_41D7_2E47FA7406ED',
        hideEasing: 'cubic_out',
        showEasing: 'cubic_in',
        popupMaxHeight: '95%',
        image: 'this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392',
        pitch: -2.87,
        rotationZ: 0,
        hfov: 1.53,
        yaw: 9.13,
        popupDistance: 100,
        showDuration: 500
      },
      {
        showEffect: {
          class: 'FadeInEffect',
          easing: 'cubic_in_out',
          duration: 350
        },
        toolTipHorizontalAlign: 'center',
        paddingBottom: 0,
        backgroundColorRatios: [0],
        id: 'veilPopupPanorama',
        left: 0,
        paddingLeft: 0,
        right: 0,
        backgroundOpacity: 0.55,
        paddingRight: 0,
        propagateClick: false,
        borderSize: 0,
        top: 0,
        backgroundColor: ['#000000'],
        bottom: 0,
        class: 'UIComponent',
        minHeight: 0,
        minWidth: 0,
        borderRadius: 0,
        shadow: false,
        backgroundColorDirection: 'vertical',
        data: {
          name: 'UIComponent6221'
        },
        visible: false,
        paddingTop: 0
      },
      {
        toolTipHorizontalAlign: 'center',
        paddingBottom: 0,
        backgroundColorRatios: [],
        id: 'zoomImagePopupPanorama',
        left: 0,
        paddingLeft: 0,
        right: 0,
        backgroundOpacity: 1,
        paddingRight: 0,
        propagateClick: false,
        borderSize: 0,
        top: 0,
        backgroundColor: [],
        bottom: 0,
        class: 'ZoomImage',
        minHeight: 0,
        minWidth: 0,
        borderRadius: 0,
        shadow: false,
        backgroundColorDirection: 'vertical',
        scaleMode: 'custom',
        data: {
          name: 'ZoomImage6222'
        },
        visible: false,
        paddingTop: 0
      },
      {
        showEffect: {
          class: 'FadeInEffect',
          easing: 'cubic_in_out',
          duration: 350
        },
        rollOverIconColor: '#666666',
        paddingBottom: 5,
        backgroundColorRatios: [0, 0.1, 1],
        shadowSpread: 1,
        id: 'closeButtonPopupPanorama',
        paddingLeft: 5,
        shadowColor: '#000000',
        toolTipHorizontalAlign: 'center',
        right: 10,
        backgroundOpacity: 0.3,
        gap: 5,
        fontFamily: 'Arial',
        paddingRight: 5,
        verticalAlign: 'middle',
        iconWidth: '100%',
        iconLineWidth: 5,
        shadowBlurRadius: 6,
        horizontalAlign: 'center',
        propagateClick: false,
        borderColor: '#000000',
        borderSize: 0,
        top: 10,
        iconHeight: '100%',
        pressedIconColor: '#888888',
        textDecoration: 'none',
        backgroundColor: ['#DDDDDD', '#EEEEEE', '#FFFFFF'],
        layout: 'horizontal',
        mode: 'push',
        fontSize: '1.29vmin',
        class: 'CloseButton',
        minHeight: 0,
        minWidth: 0,
        borderRadius: 0,
        fontStyle: 'normal',
        shadow: false,
        iconColor: '#000000',
        backgroundColorDirection: 'vertical',
        fontColor: '#FFFFFF',
        data: {
          name: 'CloseButton6223'
        },
        visible: false,
        paddingTop: 5,
        cursor: 'hand',
        fontWeight: 'normal'
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E3044FC5_FAD5_D237_41EA_C326291BF78A'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 6.22,
            image:
              'this.AnimatedImageResource_11DF06A9_0FF6_4A8E_41A5_405B53574182',
            pitch: 5.73,
            verticalAlign: 'middle',
            yaw: 12.25,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'Arrow 07'
            },
            distance: 100,
            hfov: 5
          }
        ],
        id: 'overlay_136F4C6D_0FD9_FD87_4174_BD084F0F7E48',
        data: {
          label: 'Arrow 07',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E3834F8B_FAD4_B233_41E4_5FE9CC77C376'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.77,
            image:
              'this.AnimatedImageResource_11DCF6A9_0FF6_4A8E_41B1_2C474148CEB1',
            pitch: -2.96,
            verticalAlign: 'middle',
            yaw: 2.64,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 1.53
          }
        ],
        id: 'overlay_136F7C6D_0FD9_FD87_41B6_A314FCD00AD2',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E31D646E_FAD4_D6F5_41ED_770ED0C2CB29'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.77,
            image:
              'this.AnimatedImageResource_11DCD6A9_0FF6_4A8E_41B4_1D003389E613',
            pitch: -3.02,
            verticalAlign: 'middle',
            yaw: -4.56,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 1.53
          }
        ],
        id: 'overlay_136F6C6D_0FD9_FD87_41B0_C984054ECA1D',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E37191DE_FAD4_B1D5_41BE_2E93BB41CEB3'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.77,
            image:
              'this.AnimatedImageResource_11DCB6AA_0FF6_4A82_41B7_A49379CDA0A9',
            pitch: -2.87,
            verticalAlign: 'middle',
            yaw: 9.13,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 1.53
          }
        ],
        id: 'overlay_136F9C6D_0FD9_FD87_41A1_A33743CD0C15',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_07F5CA9F_096A_F974_418E_FEC30C3F9E62'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 2.22,
            image:
              'this.AnimatedImageResource_11DEF6A8_0FF6_4A8E_419D_E51708EE9438',
            pitch: 0.14,
            verticalAlign: 'middle',
            yaw: -4.83,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.77
          }
        ],
        id: 'overlay_10854AD5_0FDA_3A86_41AE_217F79EC28EF',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_07FEEFB6_096A_76B4_4194_F1B3F84B7162'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 3,
            image:
              'this.AnimatedImageResource_11DED6A8_0FF6_4A8E_41B2_2E9DEA681A3E',
            pitch: -6.07,
            verticalAlign: 'middle',
            yaw: 0.42,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50'
            },
            distance: 50,
            hfov: 3.05
          }
        ],
        id: 'overlay_1085BAD5_0FDA_3A86_419A_072271A671C6',
        data: {
          label: 'arrow-gif-transparency-50',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_049BAFDA_096B_96FC_4198_0019352C6812'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.65,
            image:
              'this.AnimatedImageResource_11DEB6A8_0FF6_4A8E_4199_3A02B13F9076',
            pitch: -7.2,
            verticalAlign: 'middle',
            yaw: 0.45,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50-back'
            },
            distance: 50,
            hfov: 2.04
          }
        ],
        id: 'overlay_1085AAD5_0FDA_3A86_41AF_F410523FAFBA',
        data: {
          label: 'arrow-gif-transparency-50-back',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EF18A1F1_F9F7_B1EF_41E1_13D746178831'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.67,
            image:
              'this.AnimatedImageResource_11DD86AA_0FF6_4A82_4144_2E2D83567F32',
            pitch: -0.33,
            verticalAlign: 'middle',
            yaw: -4.29,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.74
          }
        ],
        id: 'overlay_1083FCBD_0FD9_FE86_41B0_90EFEE542DF5',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EE937120_F9F7_AE6D_41D1_165EE67A4F5E'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.67,
            image:
              'this.AnimatedImageResource_11DD66AA_0FF6_4A82_4190_9B5A0E6958B6',
            pitch: -0.12,
            verticalAlign: 'middle',
            yaw: 2.95,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.74
          }
        ],
        id: 'overlay_1083ECBD_0FD9_FE86_419F_4C62334608C3',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E2367C1D_FAF7_B657_41D8_FCDA6708999F'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.49,
            image:
              'this.AnimatedImageResource_11DD56AA_0FF6_4A82_41BA_05D0FDB4D1E2',
            pitch: -6.41,
            verticalAlign: 'middle',
            yaw: 0.6,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50'
            },
            distance: 50,
            hfov: 5.06
          }
        ],
        id: 'overlay_109C1CBD_0FD9_FE86_41B5_05D23B8AC6C1',
        data: {
          label: 'arrow-gif-transparency-50',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_ED15B3A7_FAF4_5273_41EF_0D90A7381870'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.72,
            image:
              'this.AnimatedImageResource_11DD06AA_0FF6_4A82_41B7_7037FDBE88F2',
            pitch: -7.57,
            verticalAlign: 'middle',
            yaw: 0.65,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50-back'
            },
            distance: 50,
            hfov: 2.91
          }
        ],
        id: 'overlay_109C0CBD_0FD9_FE86_41B7_5382B72AC766',
        data: {
          label: 'arrow-gif-transparency-50-back',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EF5DD373_F9F4_72D3_41D3_10F289BB8258'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.67,
            image:
              'this.AnimatedImageResource_11DC06AA_0FF6_4A82_41A2_AB0C1D103569',
            pitch: 0.6,
            verticalAlign: 'middle',
            yaw: 6.64,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.74
          }
        ],
        id: 'overlay_1057BD40_0FDE_5FFE_41A2_AAFDAD915264',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E25E66FD_FAF7_F3D7_4186_751DA5BB2017'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.49,
            image:
              'this.AnimatedImageResource_11DDE6AA_0FF6_4A82_41B6_098F3E75D43D',
            pitch: -6.13,
            verticalAlign: 'middle',
            yaw: 0.43,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50'
            },
            distance: 50,
            hfov: 5.06
          }
        ],
        id: 'overlay_10574D40_0FDE_5FFE_4184_D3D72A166084',
        data: {
          label: 'arrow-gif-transparency-50',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_ED593BAA_FAF5_D27D_41D9_0630258DDF3D'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.72,
            image:
              'this.AnimatedImageResource_11DDC6AA_0FF6_4A82_41AD_FA848AC7D886',
            pitch: -7.46,
            verticalAlign: 'middle',
            yaw: 0.52,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50-back'
            },
            distance: 50,
            hfov: 2.91
          }
        ],
        id: 'overlay_10575D40_0FDE_5FFE_41A9_72724CEAD2CB',
        data: {
          label: 'arrow-gif-transparency-50-back',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EEAD3521_F9F4_F66F_41D1_2A33F5BCE646'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.67,
            image:
              'this.AnimatedImageResource_11DE46A8_0FF6_4A8E_41BE_73447666DC2F',
            pitch: 0.07,
            verticalAlign: 'middle',
            yaw: 5.21,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.74
          }
        ],
        id: 'overlay_13734C9E_0FDA_FE85_418D_7FB95FB89526',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EDF5B9FE_FAF4_51D5_41E1_F6A3FA8E4E9B'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.49,
            image:
              'this.AnimatedImageResource_11DE36A9_0FF6_4A8E_41B1_5D1E933F10FA',
            pitch: -6.2,
            verticalAlign: 'middle',
            yaw: 0.22,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50'
            },
            distance: 50,
            hfov: 5.06
          }
        ],
        id: 'overlay_13736C9E_0FDA_FE85_415E_8A80C10E8A5F',
        data: {
          label: 'arrow-gif-transparency-50',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E306450F_FAF4_F633_41BD_D64CC9D7AA1A'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.72,
            image:
              'this.AnimatedImageResource_11DE16A9_0FF6_4A8E_41BE_4FA0DCEF3ADF',
            pitch: -7.4,
            verticalAlign: 'middle',
            yaw: 0.23,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50-back'
            },
            distance: 50,
            hfov: 2.91
          }
        ],
        id: 'overlay_137ECC9E_0FDA_FE85_41B7_5C20FA311C2B',
        data: {
          label: 'arrow-gif-transparency-50-back',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_107851B7_0FDA_C682_41B1_00FF17EA779B'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            image: {
              class: 'ImageResource',
              levels: [
                {
                  class: 'ImageResourceLevel',
                  url: 'media/panorama_1399C7A9_0FC9_CA8F_41B6_CAD597C749D8_HS_7q2h6s41.png',
                  width: 304,
                  height: 184
                }
              ]
            },
            pitch: -2.26,
            yaw: 1.47,
            data: {
              label: 'Text'
            },
            distance: 50,
            hfov: 1.52
          }
        ],
        id: 'overlay_1078F1B6_0FDA_C682_41B5_AB534E040CB1',
        data: {
          label: 'Text',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_076BAC89_0976_F95C_4194_2FED5C3F37A7'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 2.66,
            image:
              'this.AnimatedImageResource_11D1B6A6_0FF6_4A82_41B4_9AC35161E7EE',
            pitch: -2,
            verticalAlign: 'middle',
            yaw: 1.1,
            opacity: 0.79,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.88
          }
        ],
        id: 'overlay_1399E7AA_0FC9_CA82_41A3_EBBD0CDA4AB5',
        data: {
          label: '3_Hotspot button_pulsing animated gif',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_042919E3_0976_9ACC_4198_1C20A16F8D0D'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.99,
            image:
              'this.AnimatedImageResource_11D156A7_0FF6_4A82_41B8_94A249F22B96',
            pitch: -0.74,
            verticalAlign: 'middle',
            yaw: -0.73,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.65
          }
        ],
        id: 'overlay_13A607AB_0FC9_CA83_41A3_CD6F75D354FC',
        enabledInCardboard: true,
        maps: []
      },
      {
        begin: 'this.setEndToItemIndex(this.mainPlayList, 2, 3)',
        media: 'this.panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB',
        camera: 'this.panorama_13733C9E_0FDA_FE85_41B5_E92925C0FEFB_camera',
        class: 'PanoramaPlayListItem',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_11DB3776_0FF6_4B85_41BA_C94FC8D89646'
      },
      {
        begin: 'this.setEndToItemIndex(this.mainPlayList, 3, 4)',
        media: 'this.panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87',
        camera: 'this.panorama_1362F78B_0FDA_4A83_41B0_CDB883631F87_camera',
        class: 'PanoramaPlayListItem',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_11D8A778_0FF6_4B8D_4195_29E6C1B81B94'
      },
      {
        begin: 'this.setEndToItemIndex(this.mainPlayList, 4, 5)',
        media: 'this.panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052',
        camera: 'this.panorama_136F3C6D_0FD9_FD87_41B4_EEC7C0CE4052_camera',
        class: 'PanoramaPlayListItem',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_11D8077B_0FF6_4B83_41B1_C3C8E1E6D453'
      },
      {
        begin: 'this.setEndToItemIndex(this.mainPlayList, 5, 6)',
        media: 'this.panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10',
        camera: 'this.panorama_1057AD40_0FDE_5FFE_41B0_340B097A6B10_camera',
        class: 'PanoramaPlayListItem',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_11D8577A_0FF6_4B8D_41A2_4772B3148561'
      },
      {
        begin: 'this.setEndToItemIndex(this.mainPlayList, 6, 0)',
        media: 'this.panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E',
        end: "this.trigger('tourEnded')",
        camera: 'this.panorama_1083ACBD_0FD9_FE86_4190_07A2F2FE8E6E_camera',
        class: 'PanoramaPlayListItem',
        player: 'this.MainViewerPanoramaPlayer',
        id: 'PanoramaPlayListItem_11C6B780_0FF6_4B7D_41A4_C898FAD8F680'
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EE52A58E_F9F4_B635_41DD_5B60B318664A'
        ],
        data: {
          label: '3_Hotspot button_pulsing animated gif'
        },
        rollOverDisplay: false,
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.67,
            image:
              'this.AnimatedImageResource_11DFA6A9_0FF6_4A8E_41BC_5B885264C4FD',
            pitch: 0.11,
            verticalAlign: 'middle',
            yaw: -5.49,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.74
          }
        ],
        id: 'overlay_1362A78B_0FDA_4A83_41AA_704E5F5893A0',
        enabledInCardboard: true,
        maps: []
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_EDF8D42E_FAF7_B675_41E0_B7C15C3F56CF'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 1.49,
            image:
              'this.AnimatedImageResource_11DFB6A9_0FF6_4A8E_41A1_4E744B98EC15',
            pitch: -6.09,
            verticalAlign: 'middle',
            yaw: 0.28,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50'
            },
            distance: 50,
            hfov: 5.06
          }
        ],
        id: 'overlay_1362B78B_0FDA_4A83_41A4_F0A0FEFB6081',
        data: {
          label: 'arrow-gif-transparency-50',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_ED4A55B2_FAF5_D66D_41CD_9E8783D0184D'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.72,
            image:
              'this.AnimatedImageResource_11DF96A9_0FF6_4A8E_419E_3E42D9B93552',
            pitch: -7.48,
            verticalAlign: 'middle',
            yaw: 0.31,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: 'arrow-gif-transparency-50-back'
            },
            distance: 50,
            hfov: 2.91
          }
        ],
        id: 'overlay_1362878B_0FDA_4A83_41BB_1BD47E448B2C',
        data: {
          label: 'arrow-gif-transparency-50-back',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        useHandCursor: true,
        areas: [
          'this.HotspotPanoramaOverlayArea_E2C66C26_FACC_B675_41EE_33A97BD92267'
        ],
        enabledInCardboard: true,
        maps: [],
        class: 'HotspotPanoramaOverlay',
        items: [
          {
            class: 'HotspotPanoramaOverlayImage',
            vfov: 0.67,
            image:
              'this.AnimatedImageResource_11DF46A9_0FF6_4A8E_41BB_1EB8A47D00C7',
            pitch: -1.29,
            verticalAlign: 'middle',
            yaw: -7.96,
            opacity: 0.7,
            horizontalAlign: 'center',
            scaleMode: 'fit_inside',
            data: {
              label: '3_Hotspot button_pulsing animated gif'
            },
            distance: 50,
            hfov: 0.74
          }
        ],
        id: 'overlay_136C578C_0FDA_4A85_4190_9CAE7E89B50B',
        data: {
          label: '3_Hotspot button_pulsing animated gif',
          hasPanoramaAction: true
        },
        rollOverDisplay: false
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'any',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11D8A778_0FF6_4B8D_4195_29E6C1B81B94, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)",
        id: 'HotspotPanoramaOverlayArea_E3044FC5_FAD5_D237_41EA_C326291BF78A'
      },
      {
        colCount: 4,
        frameDuration: 41,
        rowCount: 6,
        class: 'AnimatedImageResource',
        frameCount: 24,
        id: 'AnimatedImageResource_11DF06A9_0FF6_4A8E_41A5_405B53574182',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E3AD561B_FAD4_5253_4185_FF579D8E530C_0.png',
            width: 680,
            height: 1020
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_E3835F8B_FAD4_B233_41EC_A5CDC5D33ADF, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_E3834F8B_FAD4_B233_41E4_5FE9CC77C376'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DCF6A9_0FF6_4A8E_41B1_2C474148CEB1',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_E315C46F_FAD4_D6F3_41CD_9E16A3998463, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_E31D646E_FAD4_D6F5_41ED_770ED0C2CB29'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DCD6A9_0FF6_4A8E_41B4_1D003389E613',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_E371A1DF_FAD4_B1D3_41D7_2E47FA7406ED, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_E37191DE_FAD4_B1D5_41BE_2E93BB41CEB3'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DCB6AA_0FF6_4A82_41B7_A49379CDA0A9',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_07EDBAA1_096A_F94C_4199_918870DA56D4, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_07F5CA9F_096A_F974_418E_FEC30C3F9E62'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DEF6A8_0FF6_4A8E_419D_E51708EE9438',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11DB3776_0FF6_4B85_41BA_C94FC8D89646, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)",
        id: 'HotspotPanoramaOverlayArea_07FEEFB6_096A_76B4_4194_F1B3F84B7162'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DED6A8_0FF6_4A8E_41B2_2E9DEA681A3E',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EF35A_FAD3_F2DD_41E8_AEC5EA811EEA_0.png',
            width: 1839,
            height: 1520
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click: "this.mainPlayList.set('selectedIndex', 0)",
        id: 'HotspotPanoramaOverlayArea_049BAFDA_096B_96FC_4198_0019352C6812'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DEB6A8_0FF6_4A8E_4199_3A02B13F9076',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EC35A_FAD3_F2DD_41EA_54EDBF13DACB_0.png',
            width: 1233,
            height: 1020
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_EF61E1F1_F9F7_B1EF_41D5_761E7B0CAF86, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_EF18A1F1_F9F7_B1EF_41E1_13D746178831'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DD86AA_0FF6_4A82_4144_2E2D83567F32',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_EE936120_F9F7_AE6D_41EA_0915385E24FF, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_EE937120_F9F7_AE6D_41D1_165EE67A4F5E'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DD66AA_0FF6_4A82_4190_9B5A0E6958B6',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click: "this.mainPlayList.set('selectedIndex', 0)",
        id: 'HotspotPanoramaOverlayArea_E2367C1D_FAF7_B657_41D8_FCDA6708999F'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DD56AA_0FF6_4A82_41BA_05D0FDB4D1E2',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EF35A_FAD3_F2DD_41E8_AEC5EA811EEA_0.png',
            width: 1839,
            height: 1520
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11D8577A_0FF6_4B8D_41A2_4772B3148561, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 5)",
        id: 'HotspotPanoramaOverlayArea_ED15B3A7_FAF4_5273_41EF_0D90A7381870'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DD06AA_0FF6_4A82_41B7_7037FDBE88F2',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EC35A_FAD3_F2DD_41EA_54EDBF13DACB_0.png',
            width: 1233,
            height: 1020
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_EEA48373_F9F4_72D3_41E0_334EC953F861, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_EF5DD373_F9F4_72D3_41D3_10F289BB8258'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DC06AA_0FF6_4A82_41A2_AB0C1D103569',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11C6B780_0FF6_4B7D_41A4_C898FAD8F680, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 6)",
        id: 'HotspotPanoramaOverlayArea_E25E66FD_FAF7_F3D7_4186_751DA5BB2017'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DDE6AA_0FF6_4A82_41B6_098F3E75D43D',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EF35A_FAD3_F2DD_41E8_AEC5EA811EEA_0.png',
            width: 1839,
            height: 1520
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11D8A778_0FF6_4B8D_4195_29E6C1B81B94, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)",
        id: 'HotspotPanoramaOverlayArea_ED593BAA_FAF5_D27D_41D9_0630258DDF3D'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DDC6AA_0FF6_4A82_41AD_FA848AC7D886',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EC35A_FAD3_F2DD_41EA_54EDBF13DACB_0.png',
            width: 1233,
            height: 1020
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_EEB46521_F9F4_F66F_41A9_5BB85AB3C191, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_EEAD3521_F9F4_F66F_41D1_2A33F5BCE646'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DE46A8_0FF6_4A8E_41BE_73447666DC2F',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11D8A778_0FF6_4B8D_4195_29E6C1B81B94, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)",
        id: 'HotspotPanoramaOverlayArea_EDF5B9FE_FAF4_51D5_41E1_F6A3FA8E4E9B'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DE36A9_0FF6_4A8E_41B1_5D1E933F10FA',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EF35A_FAD3_F2DD_41E8_AEC5EA811EEA_0.png',
            width: 1839,
            height: 1520
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click: "this.mainPlayList.set('selectedIndex', 1)",
        id: 'HotspotPanoramaOverlayArea_E306450F_FAF4_F633_41BD_D64CC9D7AA1A'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DE16A9_0FF6_4A8E_41BE_4FA0DCEF3ADF',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EC35A_FAD3_F2DD_41EA_54EDBF13DACB_0.png',
            width: 1233,
            height: 1020
          }
        ]
      },
      {
        mapColor: 'any',
        toolTip: trans(
          'HotspotPanoramaOverlayArea_107851B7_0FDA_C682_41B1_00FF17EA779B.toolTip'
        ),
        class: 'HotspotPanoramaOverlayArea',
        click: "this.mainPlayList.set('selectedIndex', 1)",
        id: 'HotspotPanoramaOverlayArea_107851B7_0FDA_C682_41B1_00FF17EA779B'
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click: "this.mainPlayList.set('selectedIndex', 1)",
        id: 'HotspotPanoramaOverlayArea_076BAC89_0976_F95C_4194_2FED5C3F37A7'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11D1B6A6_0FF6_4A82_41B4_9AC35161E7EE',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_0422D9E5_0976_9AD4_4165_ABC72AD5FB44, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_042919E3_0976_9ACC_4198_1C20A16F8D0D'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11D156A7_0FF6_4A82_41B8_94A249F22B96',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.showPopupPanoramaOverlay(this.popup_EE52B58E_F9F4_B635_41E3_EDACFB231B4D, {'iconHeight':20,'pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingRight':5,'paddingLeft':5,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','paddingTop':5,'pressedBorderColor':'#000000','borderColor':'#000000','rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5}, this.res_EEFBF7C1_F9D4_522F_41EB_76B14D467392, null, null, null, false)",
        id: 'HotspotPanoramaOverlayArea_EE52A58E_F9F4_B635_41DD_5B60B318664A'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DFA6A9_0FF6_4A8E_41BC_5B885264C4FD',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11D8577A_0FF6_4B8D_41A2_4772B3148561, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 5)",
        id: 'HotspotPanoramaOverlayArea_EDF8D42E_FAF7_B675_41E0_B7C15C3F56CF'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DFB6A9_0FF6_4A8E_41A1_4E744B98EC15',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EF35A_FAD3_F2DD_41E8_AEC5EA811EEA_0.png',
            width: 1839,
            height: 1520
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11DB3776_0FF6_4B85_41BA_C94FC8D89646, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)",
        id: 'HotspotPanoramaOverlayArea_ED4A55B2_FAF5_D66D_41CD_9E8783D0184D'
      },
      {
        colCount: 3,
        frameDuration: 221,
        rowCount: 5,
        class: 'AnimatedImageResource',
        frameCount: 14,
        id: 'AnimatedImageResource_11DF96A9_0FF6_4A8E_419E_3E42D9B93552',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_E28EC35A_FAD3_F2DD_41EA_54EDBF13DACB_0.png',
            width: 1233,
            height: 1020
          }
        ]
      },
      {
        class: 'HotspotPanoramaOverlayArea',
        mapColor: 'image',
        click:
          "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11D8077B_0FF6_4B83_41B1_C3C8E1E6D453, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 4)",
        id: 'HotspotPanoramaOverlayArea_E2C66C26_FACC_B675_41EE_33A97BD92267'
      },
      {
        colCount: 5,
        frameDuration: 30,
        rowCount: 7,
        class: 'AnimatedImageResource',
        frameCount: 31,
        id: 'AnimatedImageResource_11DF46A9_0FF6_4A8E_41BB_1EB8A47D00C7',
        levels: [
          {
            class: 'ImageResourceLevel',
            url: 'media/res_EC639796_F9B4_5255_41B5_FE18C5050134_0.png',
            width: 860,
            height: 1204
          }
        ]
      }
    ],
    backgroundColorDirection: 'vertical',
    scripts: {
      quizSetItemFound: TDV.Tour.Script.quizSetItemFound,
      skip3DTransitionOnce: TDV.Tour.Script.skip3DTransitionOnce,
      getPlayListItemByMedia: TDV.Tour.Script.getPlayListItemByMedia,
      mixObject: TDV.Tour.Script.mixObject,
      updateDeepLink: TDV.Tour.Script.updateDeepLink,
      getCurrentPlayerWithMedia: TDV.Tour.Script.getCurrentPlayerWithMedia,
      shareSocial: TDV.Tour.Script.shareSocial,
      getActivePlayerWithViewer: TDV.Tour.Script.getActivePlayerWithViewer,
      updateMediaLabelFromPlayList:
        TDV.Tour.Script.updateMediaLabelFromPlayList,
      getActiveMediaWithViewer: TDV.Tour.Script.getActiveMediaWithViewer,
      quizShowQuestion: TDV.Tour.Script.quizShowQuestion,
      updateVideoCues: TDV.Tour.Script.updateVideoCues,
      clone: TDV.Tour.Script.clone,
      historyGoBack: TDV.Tour.Script.historyGoBack,
      setValue: TDV.Tour.Script.setValue,
      getMediaFromPlayer: TDV.Tour.Script.getMediaFromPlayer,
      getOverlays: TDV.Tour.Script.getOverlays,
      _initTTSTooltips: TDV.Tour.Script._initTTSTooltips,
      getMediaWidth: TDV.Tour.Script.getMediaWidth,
      loadFromCurrentMediaPlayList:
        TDV.Tour.Script.loadFromCurrentMediaPlayList,
      showPopupMedia: TDV.Tour.Script.showPopupMedia,
      copyToClipboard: TDV.Tour.Script.copyToClipboard,
      showComponentsWhileMouseOver:
        TDV.Tour.Script.showComponentsWhileMouseOver,
      getPixels: TDV.Tour.Script.getPixels,
      copyObjRecursively: TDV.Tour.Script.copyObjRecursively,
      getComponentByName: TDV.Tour.Script.getComponentByName,
      init: TDV.Tour.Script.init,
      cloneCamera: TDV.Tour.Script.cloneCamera,
      setLocale: TDV.Tour.Script.setLocale,
      getCurrentPlayers: TDV.Tour.Script.getCurrentPlayers,
      setMapLocation: TDV.Tour.Script.setMapLocation,
      showPopupImage: TDV.Tour.Script.showPopupImage,
      changePlayListWithSameSpot: TDV.Tour.Script.changePlayListWithSameSpot,
      setEndToItemIndex: TDV.Tour.Script.setEndToItemIndex,
      changeBackgroundWhilePlay: TDV.Tour.Script.changeBackgroundWhilePlay,
      registerKey: TDV.Tour.Script.registerKey,
      executeFunctionWhenChange: TDV.Tour.Script.executeFunctionWhenChange,
      getKey: TDV.Tour.Script.getKey,
      autotriggerAtStart: TDV.Tour.Script.autotriggerAtStart,
      historyGoForward: TDV.Tour.Script.historyGoForward,
      resumePlayers: TDV.Tour.Script.resumePlayers,
      setMainMediaByIndex: TDV.Tour.Script.setMainMediaByIndex,
      _initSplitViewer: TDV.Tour.Script._initSplitViewer,
      htmlToPlainText: TDV.Tour.Script.htmlToPlainText,
      showPopupPanoramaOverlay: TDV.Tour.Script.showPopupPanoramaOverlay,
      getPanoramaOverlayByName: TDV.Tour.Script.getPanoramaOverlayByName,
      resumeGlobalAudios: TDV.Tour.Script.resumeGlobalAudios,
      showPopupPanoramaVideoOverlay:
        TDV.Tour.Script.showPopupPanoramaVideoOverlay,
      unregisterKey: TDV.Tour.Script.unregisterKey,
      existsKey: TDV.Tour.Script.existsKey,
      showWindow: TDV.Tour.Script.showWindow,
      initAnalytics: TDV.Tour.Script.initAnalytics,
      stopGlobalAudios: TDV.Tour.Script.stopGlobalAudios,
      getMainViewer: TDV.Tour.Script.getMainViewer,
      setMainMediaByName: TDV.Tour.Script.setMainMediaByName,
      stopGlobalAudio: TDV.Tour.Script.stopGlobalAudio,
      visibleComponentsIfPlayerFlagEnabled:
        TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,
      startPanoramaWithCamera: TDV.Tour.Script.startPanoramaWithCamera,
      textToSpeech: TDV.Tour.Script.textToSpeech,
      getPlayListsWithMedia: TDV.Tour.Script.getPlayListsWithMedia,
      stopAndGoCamera: TDV.Tour.Script.stopAndGoCamera,
      getMediaByName: TDV.Tour.Script.getMediaByName,
      stopTextToSpeech: TDV.Tour.Script.stopTextToSpeech,
      syncPlaylists: TDV.Tour.Script.syncPlaylists,
      setMediaBehaviour: TDV.Tour.Script.setMediaBehaviour,
      openLink: TDV.Tour.Script.openLink,
      _getPlayListsWithViewer: TDV.Tour.Script._getPlayListsWithViewer,
      setOverlayBehaviour: TDV.Tour.Script.setOverlayBehaviour,
      getPlayListWithItem: TDV.Tour.Script.getPlayListWithItem,
      pauseCurrentPlayers: TDV.Tour.Script.pauseCurrentPlayers,
      openEmbeddedPDF: TDV.Tour.Script.openEmbeddedPDF,
      _initTwinsViewer: TDV.Tour.Script._initTwinsViewer,
      pauseGlobalAudiosWhilePlayItem:
        TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,
      quizFinish: TDV.Tour.Script.quizFinish,
      isCardboardViewMode: TDV.Tour.Script.isCardboardViewMode,
      getGlobalAudio: TDV.Tour.Script.getGlobalAudio,
      setPanoramaCameraWithCurrentSpot:
        TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,
      getFirstPlayListWithMedia: TDV.Tour.Script.getFirstPlayListWithMedia,
      textToSpeechComponent: TDV.Tour.Script.textToSpeechComponent,
      quizStart: TDV.Tour.Script.quizStart,
      initQuiz: TDV.Tour.Script.initQuiz,
      quizShowTimeout: TDV.Tour.Script.quizShowTimeout,
      isPanorama: TDV.Tour.Script.isPanorama,
      pauseGlobalAudio: TDV.Tour.Script.pauseGlobalAudio,
      assignObjRecursively: TDV.Tour.Script.assignObjRecursively,
      sendAnalyticsData: TDV.Tour.Script.sendAnalyticsData,
      setPanoramaCameraWithSpot: TDV.Tour.Script.setPanoramaCameraWithSpot,
      triggerOverlay: TDV.Tour.Script.triggerOverlay,
      setCameraSameSpotAsMedia: TDV.Tour.Script.setCameraSameSpotAsMedia,
      setSurfaceSelectionHotspotMode:
        TDV.Tour.Script.setSurfaceSelectionHotspotMode,
      setComponentVisibility: TDV.Tour.Script.setComponentVisibility,
      pauseGlobalAudios: TDV.Tour.Script.pauseGlobalAudios,
      translate: TDV.Tour.Script.translate,
      playAudioList: TDV.Tour.Script.playAudioList,
      playGlobalAudioWhilePlay: TDV.Tour.Script.playGlobalAudioWhilePlay,
      keepCompVisible: TDV.Tour.Script.keepCompVisible,
      playGlobalAudio: TDV.Tour.Script.playGlobalAudio,
      getPlayListItems: TDV.Tour.Script.getPlayListItems,
      getMediaHeight: TDV.Tour.Script.getMediaHeight,
      fixTogglePlayPauseButton: TDV.Tour.Script.fixTogglePlayPauseButton,
      _initItemWithComps: TDV.Tour.Script._initItemWithComps,
      setStartTimeVideo: TDV.Tour.Script.setStartTimeVideo,
      quizShowScore: TDV.Tour.Script.quizShowScore,
      setStartTimeVideoSync: TDV.Tour.Script.setStartTimeVideoSync
    },
    data: {
      name: 'Player953',
      textToSpeechConfig: {
        pitch: 1,
        stopBackgroundAudio: false,
        rate: 1,
        speechOnQuizQuestion: false,
        speechOnInfoWindow: false,
        speechOnTooltip: false,
        volume: 1
      },
      defaultLocale: 'en',
      locales: {
        en: 'locale/en.txt'
      }
    },
    backgroundPreloadEnabled: true,
    paddingTop: 0,
    backgroundColorRatios: [0],
    mouseWheelEnabled: true
  };
  if (d['data'] == undefined) d['data'] = {};
  d['data']['translateObjs'] = c;
  d['data']['history'] = {};
  d['scripts']['createQuizConfig'] = createQuizConfig;
  TDV['PlayerAPI']['defineScript'](d);
})();
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.9.js.map
//Generated with v2021.0.9, Fri Jun 18 2021
