export class MusicPlayer {
  constructor(obj) {
    this.state = {};
    this.animationFrameId = null;/* 绘制动画api执行 */
    this.source = null;
    this.count = 0;
    this.size = obj.size;
    this.AC = new AudioContext();/* 创建音频上下文 */
    this.AnalyserNode = this.AC.createAnalyser();/* 创建分析音频数据的一个对象AnalyserNode表示一个可以提供时时频率分析，和时时时间域分析的切点，这些分析数据可以用做数据分析和可视化 */
    this.AnalyserNode.fftSize = this.size * 2;
    this.GainNode = this.AC.createGain();/* 创建一个音量控制器 用于音量变化*/
    this.AnalyserNode.connect(this.GainNode);
    console.log(this.GainNode);
   // this.GainNode.connect(this.AC.destionation);/* AudioContext的destination属性返回一个AudioDestinationNode表示context中所有音频（节点）的最终目标节点，一般是音频渲染设备，比如扬声器 */
    this.XHR = new XMLHttpRequest();
    this.visualizer = obj.visualizer;
  }

  load(url, fn) {
    this.XHR.abort();/* 如果该请求已被发出，XMLHttpRequest.abort() 方法将终止该请求。当一个请求被终止，它的 readyState 属性将被置为0（ UNSENT )。 */
    this.XHR.open("GET", url);
    this.XHR.responseType = "arraybuffer";
    this.XHR.onload = function() {
      fn(this.XHR.response);
    };
    this.XHR.send();
  }

  decode(arrayBuffer, fn) {/* ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。 */
    this.AC.decodeAudioData(/* decodeAudioData()方法可用于异步解码音频文件中的 ArrayBuffer.  */
      arrayBuffer,
      function(buffer) {
        fn(buffer);
      },
      function(err) {
        console.error(err);
      }
    );
  }

  play(url) {
    const n = ++this.count;
    this.source && this.source.stop();
    this.load(url, function(arrayBuffer) {
      if (n !== this.count) return;
      arrayBuffer &&
        this.decode(arrayBuffer, function(buffer) {
          if (n !== this.count) return;
          const bs = this.AC.createBufferSource();/* createBufferSource() 方法用于创建一个新的AudioBufferSourceNode接口, 该接口可以通过AudioBuffer 对象来播放音频数据. */
          bs.buffer = buffer;
          bs.connect(this.Analyser);
          this.source = bs;
          this.source.start();
        });
    });
  }

  stop() {
    this.source.stop();
  }

  changeVolume(percent) {
    this.GainNode.gain.value = percent * percent;
  }

  visualize() {
    const arr = new Uint8Array(this.AnalyserNode.frequencyBinCount);/* frequencyBinCount 的值固定为 AnalyserNode 接口中fftSize值的一半. 该属性通常用于可视化的数据值的数量. */
    this.AnalyserNode.getByteFrequencyData(arr);/* AnalyserNode接口的getByteFrequencyData()方法将当前频率数据复制到传入的Uint8Array（无符号字节数组）中。 */
    const self = this;
    function v() {
      self.AnalyserNode.getByteFrequencyData(arr);
      self.visualizer(arr);
      requestAnimationFrame(v);/* window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行 */
    }
    requestAnimationFrame(v);
  }
}

export default MusicPlayer