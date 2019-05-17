export default function MusicVisualizer(obj) {//初始化音频节点资源
  this.source = null;
  this.count = 0;
  this.size = obj.size;
  this.ac = new AudioContext();//创建音频上下文
  this.analyser = this.ac.createAnalyser();//创建分析节点
  this.analyser.fftSize = this.size * 2;//表示信号样本窗口大小，这些（信号）样本被用来获取频域数据。
  this.gainNode = this.ac.createGain();//创建音量节点
  //嵌套链接
  this.analyser.connect(this.gainNode);
  this.gainNode.connect(this.ac.destination);//destination属性返回一个AudioDestinationNode表示context中所有音频（节点）的最终目标节点，一般是音频渲染设备，比如扬声器。
  this.gainNode.gain.value = obj.volume || 0.5;//音量调节
  this.xhr = new XMLHttpRequest();
  this.visualizer = obj.visualizer;
  this.visualize();
}

MusicVisualizer.prototype.load = function(url, fn) {//获取音频资源
  this.xhr.abort();/* 如果该请求已被发出，XMLHttpRequest.abort() 方法将终止该请求。当一个请求被终止，它的 readyState 属性将被置为0（ UNSENT )。 */
  this.xhr.open('GET', url);
  this.xhr.responseType = 'arraybuffer';//返回的结果类型，服务器返回的数据会以二进制的形式反回
  const self = this;
  this.xhr.onload = function() {
    fn(self.xhr.response);
  };
  this.xhr.send();
};

MusicVisualizer.prototype.decode = function(arraybuffer, fn) {//解码音频
  this.ac.decodeAudioData(arraybuffer, function(buffer) {//decodeAudioData()方法可用于异步解码音频文件中的 ArrayBuffer. ArrayBuffer数据可以通过XMLHttpRequest和FileReader来获取. AudioBuffer是通过AudioContext采样率进行解码的,然后通过回调返回结果.
    fn(buffer);
  }, function(err) {
    console.error(err);
  });
};

MusicVisualizer.prototype.play = function(url) {
  const n = ++this.count;
  this.source && this.source.stop();
  const self = this;
  this.load(url, function(arraybuffer) {
    if (n !== self.count) return;
    arraybuffer && self.decode(arraybuffer, function(buffer) {/* ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。 */
      if (n !== self.count) return;
      const bs = self.ac.createBufferSource();/* createBufferSource() 方法用于创建一个新的AudioBufferSourceNode接口, 该接口可以通过AudioBuffer 对象来播放音频数据. */
      bs.buffer = buffer;
      bs.connect(self.analyser);
      self.source = bs;
      self.source.start();
    });
  });
};

MusicVisualizer.prototype.stop = function() {
  this.source && this.source.stop();
};

MusicVisualizer.prototype.addInit = function(fun) {
  this.initCallBack = fun;
};

MusicVisualizer.prototype.changeVolume = function(percent) {
  this.gainNode.gain.value = percent * percent;
};

MusicVisualizer.prototype.visualize = function() {//可视化音频数据
  const arr = new Uint8Array(this.analyser.frequencyBinCount);/* frequencyBinCount 的值固定为 AnalyserNode 接口中fftSize值的一半. 该属性通常用于可视化的数据值的数量. */
  this.analyser.getByteFrequencyData(arr);/* AnalyserNode接口的getByteFrequencyData()方法将当前频率数据复制到传入的Uint8Array（无符号字节数组）中。 */
  const self = this;
  function v() {//将音频数据存入arr数组
    self.analyser.getByteFrequencyData(arr);//分析屏图谱数据
    self.visualizer(arr);
    requestAnimationFrame(v);
  }
  requestAnimationFrame(v);
};
