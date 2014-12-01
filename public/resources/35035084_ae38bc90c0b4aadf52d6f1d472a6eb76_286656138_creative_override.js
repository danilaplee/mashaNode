(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_FIRST_QUARTILE: '960584',
      VIDEO_THIRD_QUARTILE: '960585',
      VIDEO_UNMUTE: '149645',
      FULL_SCREEN: '286263',
      DYNAMIC_CREATIVE_IMPRESSION: '536393',
      HTML5_CREATIVE_IMPRESSION: '871060'
    },
    exitEvents: [
      {
        name: 'Exit clicked - with video',
        reportingId: '1209690',
        url: 'https://tag.datariver.ru/cgi-bin/click.cgi?sid\x3d1\x26bt\x3d21\x26ad\x3d497150\x26pid\x3d1800323\x26bid\x3d3620966\x26bn\x3d3620966\x26rnd\x3d1805240470',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Exit clicked - without video',
        reportingId: '1208614',
        url: 'https://tag.datariver.ru/cgi-bin/click.cgi?sid\x3d1\x26bt\x3d21\x26ad\x3d497150\x26pid\x3d1800323\x26bid\x3d3620966\x26bn\x3d3620966\x26rnd\x3d1805240470',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'UznatyBolshe',
        reportingId: '2108046',
        url: 'http://ad.adriver.ru/cgi-bin/click.cgi?sid\x3d1\x26bt\x3d2\x26ad\x3d497150\x26pid\x3d1800323\x26bid\x3d3620926\x26bn\x3d3620926\x26rnd\x3d1150722676',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'kupity',
        reportingId: '2108047',
        url: 'http://ad.adriver.ru/cgi-bin/click.cgi?sid\x3d1\x26bt\x3d2\x26ad\x3d497150\x26pid\x3d1800323\x26bid\x3d3620925\x26bn\x3d3620925\x26rnd\x3d1097801817',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
      {
        name: 'Introduction1:ViewTime',
        reportingId: '1776778',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_VIEW_TIMER'
        }
      },
      {
        name: 'Introduction:ViewTime',
        reportingId: '1286311',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_VIEW_TIMER'
        }
      },
      {
        name: 'expand Expansion',
        reportingId: '1223622',
        videoData: null
      }
    ],
    counterEvents: [
      {
        name: 'Close Ad',
        reportingId: '1010400',
        videoData: null
      },
      {
        name: 'Introduction1:Complete',
        reportingId: '1776780',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_COMPLETE'
        }
      },
      {
        name: 'Introduction1:Interaction',
        reportingId: '1776781',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_INTERACTION'
        }
      },
      {
        name: 'Introduction1:MidPoint',
        reportingId: '1776776',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_MIDPOINT'
        }
      },
      {
        name: 'Introduction1:Mute',
        reportingId: '1776783',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_MUTE'
        }
      },
      {
        name: 'Introduction1:Pause',
        reportingId: '1776782',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_PAUSE'
        }
      },
      {
        name: 'Introduction1:Play',
        reportingId: '1776774',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_PLAY'
        }
      },
      {
        name: 'Introduction1:Replay',
        reportingId: '1776775',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_REPLAY'
        }
      },
      {
        name: 'Introduction1:Stop',
        reportingId: '1776777',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_STOP'
        }
      },
      {
        name: 'Introduction1:Unmute',
        reportingId: '1776779',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction1',
          associatedStandardVideoEvent: 'VIDEO_UNMUTE'
        }
      },
      {
        name: 'Introduction:Complete',
        reportingId: '1286323',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_COMPLETE'
        }
      },
      {
        name: 'Introduction:Interaction',
        reportingId: '1286325',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_INTERACTION'
        }
      },
      {
        name: 'Introduction:MidPoint',
        reportingId: '1286326',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_MIDPOINT'
        }
      },
      {
        name: 'Introduction:Mute',
        reportingId: '1286322',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_MUTE'
        }
      },
      {
        name: 'Introduction:Pause',
        reportingId: '1286319',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_PAUSE'
        }
      },
      {
        name: 'Introduction:Play',
        reportingId: '1286313',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_PLAY'
        }
      },
      {
        name: 'Introduction:Replay',
        reportingId: '1286328',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_REPLAY'
        }
      },
      {
        name: 'Introduction:Stop',
        reportingId: '1286318',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_STOP'
        }
      },
      {
        name: 'Introduction:Unmute',
        reportingId: '1286314',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'Introduction',
          associatedStandardVideoEvent: 'VIDEO_UNMUTE'
        }
      }
    ],
    childFiles: [
      {
        name: '970x250.jpg',
        url: '/ads/richmedia/studio/pv2/34872989/20141127053626996/970x250.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'YT_970x250_AS3_parent.swf',
        url: '/ads/richmedia/studio/pv2/34872989/20141127053626996/YT_970x250_AS3_parent.swf',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'YT_970x250_AS3_expanded.swf',
        url: '/ads/richmedia/studio/pv2/34872989/20141127053626996/YT_970x250_AS3_expanded.swf',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
      {
        name: 'dcrmvideo.mp4',
        url: 'http://gcdn.2mdn.net/videoplayback/id/a00f069ab1d2185b/itag/59/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3561568674/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/279E7E6111A2882D9837DFA743E5E9F4C9F9D4C9.A62713EA52F3EB2139D6DD0E80B9B70783BE9F7F/key/ck2/file/file.mp4',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/a00f069ab1d2185b/itag/59/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3561568674/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/476CD42DC7D77BE7A3D7E30A39E586077486BA0C.6D953837613CD2D3624056611DDBB9195810E3BE/key/ck2/dummyparam/video?auth\x3ddaEb3bNdJdwakdidtdaaAcRaHaPcbdQbNdk-buD4UI-x14qa-5sut0qorj4KGvuxOAlEq\x26aifp\x3dv001\x26slist\x3did/a00f069ab1d2185b/itag/59',
        transcodeInformation: null
      },
      {
        name: 'dcrmvideo2.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/bb11cbeb66d3ff14/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3561568674/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/56FCCDBD49AC0BF946B794B4DB3968EE96CAAAA3.2FC7C332C74019755741AA0AA78D92EC8B4D703B/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/bb11cbeb66d3ff14/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3561568674/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/31536E009A0C2D5C461FD7EF48D8441757765560.3555DB542EE5E13F8EF8C6ABF24E5771F43464DB/key/ck2/dummyparam/video?auth\x3ddaEcWaRbIaXbacodub3dQdubKc7bkb6dLcP-buD4UI-x14qa-8rorZnvsj3GGmsCRwmBr\x26aifp\x3dv001\x26slist\x3did/bb11cbeb66d3ff14/itag/15',
        transcodeInformation: null
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'Introduction1',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: 'dcrmvideo2.flv',
        mediumBandwidthVideo: 'dcrmvideo2.flv',
        highBandwidthVideo: 'dcrmvideo2.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      },
      {
        reportingIdentifier: 'Introduction',
        startMuted: true,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: 'dcrmvideo.mp4',
        mediumBandwidthVideo: 'dcrmvideo.mp4',
        highBandwidthVideo: 'dcrmvideo.mp4',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '35032756',
        artworkType: 'FLASH',
        displayType: 'EXPANDABLE',
        width: '970',
        height: '500',
        servingPath: '/ads/richmedia/studio/pv2/34872989/20141127053626996/YT_970x250_AS3_main.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'transparent',
          sdkVersion: '2.4.0',
          flashBackgroundColor: '',
          allowScriptAccess: 'always'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: {
          collapsedRect: {
            left: 0,
            top: 0,
            width: 970,
            height: 250
          },
          isPushdown: false,
          pushdownAnimationTime: 0,
          expansionMode: 'NORMAL'
        },
        imageGalleryTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'expanding';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '60548938';
  var adId = '286656138';
  var templateVersion = '200_58';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
