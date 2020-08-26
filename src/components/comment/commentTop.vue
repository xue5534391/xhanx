<template>
  <header class="header-normal">
    <div class="header-back" v-if="showLeft"></div>
    <span class="header-title font-32">{{ TopName }}</span>
    <div class="header-search" v-if="showRight"></div>
  </header>
</template>

<script>
export default {
  name: 'commentTop',
  props: {
    TopName: {
      type: String,
      default: '分类'
    },
    showLeft: Boolean,
    showRight: Boolean
  }
}
</script>

<style lang='scss'>
.header-normal {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 10rem;
  height: 1.2rem;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
}

.header-normal .header-back {
  width: 0.61333333rem;
  height: 0.34666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAaCAMAAAD/jJ6+AAAAS1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNOfcgEAAAAGHRSTlMA+YTxaxvr3L+mCaqiUUYxJRHYmpKMd14rR8HRAAAAm0lEQVQ4y+2SyQ7CMAxE62xtQ1dW//+XYsURIEw7B8SNOeXNiyLFSfPMeiL3gsDcEjPpEpulY8lBAZnsSCoflJCZ2nJAVAIm9ixpp4rABC8VuayEzMDv8dcdQ2xb3f7RONMmHcOG0fscx8Zkw8zlIbq5IjZjGe8QlbDJIUlLoSI264V0Jhpslp7OD7Dmn5/F/kJyu9vJ/PCvTr8DD0sYr/4QOQEAAAAASUVORK5CYII=)
    no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.42666667rem;
  left: 0.32rem;
}

.header-normal .header-title {
  max-width: 70%;
  color: #333;
  font-weight: 500;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.header-normal .header-search {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAmVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwwyRpgHAAAAMnRSTlMA+gbmzLWd7pEiDtwExpVDKvLRp1I+FOK/uDkX9q6rjnt3MxqHWAvXpGG6iYBya0pIMClQcwUAAAHZSURBVDjLlZPpmqIwEEUJYRFEBHHfl9ax9+nz/g83UwxBQEXn/Am536WqklRZNcbHeKpT0sm0MwytFn67igvLdf+eceTQpDe/ZTx55PizzW6367yl5GzsK2fwK88Zz6NCiPqeygMvGs5EA2ozromHPFE3qMeciLa/Ll+LXg1wkuzTW5ezcKSG6CJ44rStW4QD4OWSRrLcu/CDBpWYnfN3s7fu0Qdm5o2AjnWfM1BEcmE5brEGCrx/HaIgttpYQZof+gjMW61DIO+cGPyo1XpS8CEfUzlgOw6sZdVy/nYycGRNYfvA2oGJrMDnA+sL6P+MOnm+1im8PbAOICuip+33egC2tbcQqs9Wiq/AKG/eJXhG/drapv/jLyO65XuuQR0K1dbaO87nw8+V0uanhLKfRlTCfmP4rgTFjEFPaikLUwjqtdpXK7PZA5OyuX/OGn3+KRvbh2VgGTYywbfncCFzv7vsbSlhcLg1LF0aPToWRfev+9+XGOH132RBTUxWiHPRrKknsloPT4UQHl2EWWiFce/drnijl+KWnGzz3skGxW4X5V2Ca9fyzWiyCorRanqtvedzwY8TMwRNr2D3P9aDrt91su0oKkUXwbMeYry+9bTXsZ7zer6T/AE4EE3TZn9kCQAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: contain;
}

.header-normal .header-index,
.header-normal .header-search {
  width: 0.56rem;
  height: 0.56rem;
  position: absolute;
  top: 0.32rem;
  right: 0.32rem;
}

.header-normal .header-index {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAV1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwxn+LnKAAAAHHRSTlMAUg338NIUCIbY24/77uPIsaSWaWBOQi0oHPKBH/oJmgAAATRJREFUOMvNlNuOwiAURaFQqGK9a9XZ//+dQxjLgeyAPs56OamupGWdporxYbbBq284IXL6xpyQmD6bVwDnM4DrJ/NugKNSR8Dc++bDAqOPRxsB++iZbgvsnyry3ANb1zb9ATCLSiwv4OB7mXa39eK2i8l6mS5yeamScSZVUCfjTIIka2QSKBllEopknIlYjCSjTIIk40wEJ+NMlKyTiZNJpoEVTsaZWsk4UzNZoEyNZEFZytRINqsZf+QNT6MBzDjlfSIR1VCr2uKN1bUalA9zoWoU6EKd1+/Nqjobs+jYeNAxoXXVn7X6A2zeyxg2wNRRx3TX/CxjRzVA3vAAmIYqU378j2o6Dh/rJTMhkTiWzISk5xXkKTgbHT3kGRcbDevyLNDooFWFtmhgxZRXegeifMV/ARY5MLGD2AosAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: contain;
}

.header-normal .header-submit {
  color: #333;
  position: absolute;
  top: 0.32rem;
  right: 0.32rem;
}
</style>
