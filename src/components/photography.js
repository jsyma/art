import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions } from 'react-mdl';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Responsive = {
  widescreen:{
    breakpoint: {max:3000, min:1999},
    items:5,
    slidesToSlide: 4
  },

  Desktop: {
    breakpoint: {max: 1999, min: 1024},
    items:3,
    slidesToSlide: 3
  },
  tablet:{
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2
  },
  mobile:{
    breakpoint: {max:464, min:0},
    items: 1
  }
};


class Photography extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab : 0};
  }


toggleCategories(){
if(this.state.activeTab === 0){
  return(
    <div>
    <br/>
    <Tilt>
      <Card className = "europe-card" shadow={6} style={{width: '440px', margin: 'auto'}}>
        <Link  to ="/europe">
        <CardTitle style={{ height: '250px', background: 'url(https://lh3.googleusercontent.com/x-LpA4enaXZmN0GppNKVrLJaDvTLuVpQ_FSFfFKkcyqzshwX9S8dw_4CGwYBEIckSUV4cy98bcWB9wmnIgGtjNz5oEMpXKhCDWnniID5kH88FjBqhEbVRdIf6Bp3LF47-GTh-GsHnQ=w2400) center / cover'}}>    </CardTitle>
        </Link>
          <CardActions className = "europe-link">
            <Link style={{textDecoration: 'none', color:'black'}} to = "/europe"><h1>Europe</h1></Link>
          </CardActions>
      </Card>
    </Tilt>
        <br/><br/>
    <Tilt>
      <Card shadow={6} style={{width: '440px', margin: 'auto'}}>
      <Link to = "/northamerica">
      <CardTitle style={{ height: '250px', background: 'url(https://lh3.googleusercontent.com/YO43aFY4kbf7hzRz0zK3FwVErV6ghQv4qi6WK6qtXmtd4xOX9r0ReLsnL8ElXF6Qp5zoe70fLCbC6RZh5-wOxnJMLErfPeDc_pEbciH1nnG-6aGl8IxD-qVBzTRDQ_9PhiRYfjxcEw=w2400) center / cover'}}></CardTitle>
      </Link>
          <CardActions className = "na-link">
            <Link style={{textDecoration: 'none', color:'black'}} to = "/northamerica"><h1>North America</h1></Link>
          </CardActions>
      </Card>
    </Tilt>
    </div>
  )
} else if(this.state.activeTab === 1){
  return(
  <div>
  <br/>
  <Grid className = "photoshoot-grid-1">
  <Cell col={6}>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/RpJOZEYUrYB3hNT32QySOXJpSs-Ua-YSDgxELys1xwH792YApLU6n1LrZhQctR9JLLB2SPMpaANzy6tz1pWUfPqgGRNGgFc5QAjbqHPTc-GEUmyr1qDiGHji6IXRGZZ9oRJyoZWvbQ=w2400"alt="photoshoot"></img>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/Cz84qrXQzCoDNvXP8vw-PsmXqBR1NiLTU0bG8TLQWcpFl5Uj9Lt1f_2AKSWSdpKs3toxEQ83vROu748TvdrautMGZETmBmbdOR1HRBpGIp6T5TKxugPOx2PqE_TVZUz4Ck0-eEH-wA=w2400"alt="photoshoot"></img>
  </Cell>
  <Cell col = {6}>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/JeCcf-MIJvmeM6X2PTV98v0-EucmxWWRX_aX8twpb9PCJMWRAVmnmQLhPQkDH2geqifccDbV581e6qhjFws4rFXV-Q2Ml9oaFN9SIWyp_l0VQzfgvdlT_xj6qsgKVRnPk8jPIuhdLg=w2400"alt="photoshoot"></img>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/Ea4r-8TTWEKX5hqYrSFWxS82mJwUPat43tQ4LZyGrwlsOy4hrjmtYoPxAUM_satKMYie3aR2LYzSzR1tzU40jmPgeicwoOTJB-oazQKkxt8kHqBUcakBc1HbIHk6S9NCZSDU2G-rKg=w2400"alt="photoshoot"></img>
  </Cell>
  </Grid>
    <br/><br/><br/>
  <Grid className = "photoshoot-grid-2">
    <Cell col={4}>
      <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/LTiq-2SoY8YhjsnNQ8HawTAOZlqv9NvbG7QTLUaijMj-BnHJStGqVNAlW_zYieJSsj2fLSTVfTdEm62J1iyXeum6-ZFsDRhFK7SdrvIaTNiO5y4CftckvxVJW3jvBrkB5PEVGLRYNA=w2400"alt="photoshoot"></img>
      <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/YNSwrfDmcLpUsRNbD6AynsJiGqhlaJIHXNjJo_6_vuTB2BHWZXyMqu2bSwiXLb4U0m3FBaZacu-rqi-YNKbc2GLab-uTbSgQ45z98uVKHRRCSSrWXi-BLCnZLoAEsc3Ai2BQ27WQGg=w2400"alt="photoshoot"></img>
    </Cell>
    <Cell col={4}>
      <img style = {{width:'100%'}} src="https://lh3.googleusercontent.com/b_WKeXz14QEn4rOO2vTzNUSMFMbv3KU7NBowMWWJYkkQmWKXm3T0tbwIzhaYj5fxvtim4mSqYtiVlrTjYZgqfCYj7FfgwrnfCB6s59t5xBgpGhsf5vYptVaYog-7Ol4LTG7ACAPM7Q=w2400"alt="photoshoot"></img>
        <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/pP-PqwZoAoNgyxJDnkryRnm0gJDNgmkbv6O3W8SBQh20yDSZ1Em2jIWF4aihOAfEYLhXttQ-Wp12rrEl8SggxFJ6UvllhjXhrTWZBCFS_tHPTc1ZVKpj1-y5g8VsbXbj-J6BmikbDQ=w2400"alt="photoshoot"></img>
    </Cell>
    <Cell col={4}>
      <img style = {{width:'100%'}} src="https://lh3.googleusercontent.com/5A3ohmwbGjmqU8o8-f4RiIhAZ2iQTP0HnE0cvTyoQoNacOTlxeC79fI4ylxoSQ-miS-WH5vgSxBPOW4P7iTXYeleMfWn1RSVlTn8U8p4kHnLg88htcVq2oUUsALgTqbNwLkiz0IvUg=w2400"alt="photoshoot"></img>
    </Cell>
  </Grid>
  <br/><br/><br/>
  <Grid className = "photoshoot-grid-3">
  <Cell col={6}>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/qHU4QlpA5D1AnyRxWMM1d1VOfRCwBtX6mj_LioINp6mMYLvd6ZuYPVjKT5qNnqoRDbCc3U5fCQ7r7evbMEG6j3S-7gU61pBHWfj67UEQyybT8QEdk7CzPPPD0NWKHKlTh5wj0fG1gg=w2400"alt="photoshoot"></img>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/kfPpSfcgbbUlQkl6bQoiAws9uwMicDAHLerNlSajDhlcsgo8aLuX58lPN8Ax2WPwCTxlvzCIfZEcbtQ1ikGyJBN7NzFSc-eojWnMVjB0JJlPHObFA5FYnNUf4IrrApXaGU6EmN8FSA=w2400"alt="photoshoot"></img>
  </Cell>
  <Cell col = {6}>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/pEdaMyiSGx5DazJ8_MZqdDM0PlqU_GEy46r5KCCnzd3LBTGa-yTw3gvWwGCJe9Nx9aB1kfz1mwxx-W9wyFK73x1LsgjmyQxcR-8Dwa5qWtCZd0xgQcqQpumXkTuunEtaU3-lnP6nEA=w2400"alt="photoshoot"></img>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/EoqE64nZ8iFoq0gyx4NTyBILbA55HlNj6-_kB3tZ4pEl31MafMhoA-zMS8yh7Yyl2ot7iu5gniDE9csCuNswahM4RDZqXXjIwmeeG17LT5F9gGtSLhgaV_ou4JsSMBYNoFW57WFYyw=w2400"alt="photoshoot"></img>
  </Cell>
  </Grid>
  <br/><br/><br/>
  <Grid className = "photoshoot-grid-4">
  <Cell col={3}>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/3yORAArKtpHSnAhQ_2lFdIw8oNn-QzCLCSR6e-xbEcpjv1Rekj-4O-h_c6kv0YyeXSjvKo4Rs0atAHWeiGkn-NOZZJEo2lf7IHDFs0M_brP0eItRX343BTt4SDPREKM0N7vGKgns0Q=w2400"alt="photoshoot"></img>
  </Cell>
  <Cell col={3}>
  <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/xWilC5rVQLymLXwOCvo35Gc1taCGHzgnLkwqUoPr54n-bUfYbrQlhfVmCpY2pT2eTLkvseTpOFdoO089ueDmX6jVA6pF4JW2yDomX4zu9JBVRmAhgcByL-_AV7QT6drzI_33OTaqqA=w2400"alt="photoshoot"></img>
  </Cell>
  <Cell col = {3}>
    <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/5k7Vdz-xm-0XGmigNxpLsagfnJBuqCpTK4EAu5tF67hIjJyRGucE1Af0fIitz-dCthvcO899gj-UbpHCuPcnFvCM04aRvWzo0eCMC7BA1s-RWTPG9ZZvrbD4FIzmBp_qeO4sIcsfbg=w2400"alt="photoshoot"></img>
  </Cell>
  <Cell col={3}>
  <img style = {{width:'100%'}}src="https://lh3.googleusercontent.com/qIM4_hy9EJB3GVWWRzLUdYhyL2f1y4Wxcm95dopFDbxI9mcXi0NKk-sJsfnEC4xA70ROecOZ_8Y6uw4UbUDjDCEvgRWIC5SsycK32YHr_bm7rPd0S0mb-5shrdM9YqVfFMP1uuWANw=w2400"alt="photoshoot"></img>
  </Cell>
  </Grid>
  </div>

  )
} else if(this.state.activeTab === 2)
  return(
    <Carousel2 className = "memories-carousel" responsive = {Responsive}>
      <div>
        <img src="https://lh3.googleusercontent.com/uHgHEkVd3PcKszKihlOBQbDww2ShadNLXkVdmbtxgQrl2Z8Qtdd2kj5dFiSxtpWz-8dbLa2_BOyBrv7NxIPKlGNwK2HoB_pl4fP5Ct-yQa8-AnXhnOfqFOyYtH23cYc5jMKVOzqybQ=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/DrgAuueRlMtifN5VW_gyfYkSJSJooXtpgweX-wMrDY-8hz9lKCumK_X0fybB7xNHGY-fLgQHEtGvv1coF10i9rojxxPk98Lq60gx2SXUkgyatisXJqxIMZytJeqrmUn70xDioS2MrA=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/gRE4uhX06cnT3sG7Ghr-fBAF692H03XTDjTukqF2MpHI2B7cWqK170w_5YwfNw31y67KO3Zo7ntR80qWoU9nxtCQUI3UNO18vpsPOEr6BaybRfkHASKHuQ66twL3lCumESmpuGCiPQ=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/aaeEnGCyPI_ncwCdP3XPtfe3Ywjy_nnDYNo0i1_i6ezC2VgdL_NRq9U_eSuUkH-rxbgRQRqWuR4p2dDe1F5Zbo5no8U1hoCkd03s8Q3eQjGaUoRlK5ZzjRpNX1RJZeJaE_TgUvdCCg=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/uJqRrjhEIntHvcXsh7QZidrmNtt-qft8avrHP9dbXK6kfMv5J0-hTrZo5BuaaNbpaJIv23IYz9Mq-dC1pdmC8cQVuSN4eV1Dm4SBo1x-_dd3sofkCjFbRX25HzVsiLsqoWwY9YpVFw=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/GrW1zgN1UExkE2_qrRKUzMQVaMSx4UhGmzwaQUEE3nPg3qu5KukABcqVC0NrDgDrcn0P9vSanZtQCxqBFr2tBXipCj_7euMPEpP1Gmh5U_vKP_Xjsvds7l6kKGsP5tfjAPBc_Fy2RA=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/zsvbryitVasZG6WinSiaTX3Y6yZaEIcFgW5oz4Tz9LWroEeoOeY9FrK9mIROHmaBgc_4xruRF9D47ZKNDnfEL8VTWbtLCfuqo_M6ObfKMiwIlw47C1nEOKv-VCaZpcmI97GK87es_g=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/Nf7n_V5XIQBsicqPDG6cgr3ykq54TltVqdF6zhXnadDMjZcornX13RfwqnDevZFaX1H4Rn_Z7GwS6G-al4cfCAjpP3HvBWA5GajL_XLyM1frdFgRoxtiuRCA5pjch3CB_A6KWBGhdg=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/LlNOczTpxq7MgYOfstVYXO9KHFw4HvKpMTtTp_5QlyrVyXVtY9ztcNOOcByBW3emnSR_eGtltjR1H8UpAPnNg2xT9qLX9brtDNI6I7Vr3J2HG1NXKMaQ-aq6bP4ZfgBJGzjrty73FA=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/N_B30mSmLjpe-pK6tWyuIGlnQLlHJYlQ38ElrRudm4Qd8kTouBOf9YtFN--rffoE-j0gE5GKyR4MOVeBSnU8xUOYV2Q6IAtd5Fe8dFMlniYPIFXyMZ6cHGAlbCIF3oBbbXS1-YPBTQ=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/OpddnrGsa3YE6SfS4C7BA5ZSYo26czMj-UqwP5wEfB0oK-VPDgo8pZhMycTOvTcMqzYyGW1HepuyN5oc_mT23sNj1Kn0SynV9UKg6CCU6DiOpssQ6LDvkCM66Q3lRZJ9ekhoPvO7Vw=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/DrvDJABQcB-CslvBlhlWg8xwRkFY613knUxFqGFAZ9OoA-iQgkkXBCN4YwMV_uHrQN-OTOyRbv9z-NEFt8XQKDfYzOW4FTNk67gVWt5hxaAeGVvRTxP4FXM0mJMt9TIaoG71KbXMBA=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/9o1TAdeW3yRv9hgH0MXrPqoskh68Ww2_TfE4gGDA49he59UMSKJ_pJyKkoww2dBK1lvAwrfnIXbstUjZfWWkOAjEAMLV3Gj_Cj4ab_nYBB9dzUSAkhclGj2vNe1gg69uAaH0JThFbg=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/Hb9Np1em0SLCw8KC2UMZq7_C7YEve2j542n6RAfstmYaYW5e808JBnT6NUy42HLciM7wFAL3sGMruMywBVLEV6y3jUEImKkM4HMVpVOKVqXx7y3J70sNWavmYvCwmXnuzfiCJercZQ=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/wqZxCC9OmoyE0E0lPPasMDwt4P5lpzUE2s2LjZoMJ820hicCystSh62iQXdEhwMchOpQBKGEjs0PlRcjFJp51GNv5ssJ8qy5r7briFgo4MS5fSZcHyXJno_qH-Lsp0__vpSW5APpmA=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/_3jPC12PB4BA-a6_LVUpPY_f-J2Uq_IG1fgDpb7ONvQ_d8HhNicEocY9Rj2tPWCo9MPld5VyNHeiuogLPEvzJ9SRORSJV4O0YVRZTzV-zvUFLp-mg5KCXd8Z3wW0dsXcspMiOIa1Mw=w2400" alt="memz"></img>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/sAYCrMIlJ_n3cQJBUZAofAuKAlDmNh8Z7QNkVlH1_OOunXv2Ng81TDRts-_NMNPV-LJPJdJeT6f40FjYCDsCuipdxyv8WxcuO6mekSqzCfA3hm1rA5Kkf41zhtQB9abw-jQtWiwQxg=w2400" alt="memz"></img>
        <img src="https://lh3.googleusercontent.com/t4S5vMj_NVEol_CC0uvGp7t6NGM0_hSR_ryF33oIOi4_iFsbtwX-oVpmcpEnqcqYkVv-BLIKaJlNe_ghRfx5LNO3bWsVaTuerKBsTquTfkGIb9RL-bQxnoJFRVv8MvAeT9xX9hkdhA=w2400" alt="memz"></img>
      </div>
    </Carousel2>
  )
}

  render () {
    return (
      <div className = "category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})} ripple>
          <Tab className = "Landscapes-tab"><p>Landscapes</p></Tab>
          <Tab className = "Photoshoots-tab"><p>Photoshoots</p></Tab>
          <Tab className = "Memories-tab"><p>Memories</p></Tab>
        </Tabs>
        <section className="photography-grid">
          <Grid className = "photography-grid">
            <Cell col={12}>
              <div className = "photos">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}
export default Photography;
