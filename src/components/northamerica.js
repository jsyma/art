import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell } from 'react-mdl';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Northamerica extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab : 0};
  }

  toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <Carousel className = "na-gallery">
        <div>
            <img src="https://lh3.googleusercontent.com/lFxa9dH1OW6uJyWvLjrdwPHi44fex7_PWupL2lQO4W9aeqPShiAzu3fYkjjkSndEC01dLc3LFjggmU6gPSQnt5_dfDLEQRkeZAUqdPi55G7sgRMjrkBBU8NGWRM67Rvsrn55fiWcXw=w2400"alt="na"></img>
          <p>Winter in Niagara Falls</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/zEaUB4cZNUME5lgDS8fkReW_drpIOa7MuQsJll2O9fkDqsJ4Ms3hFJ95CnhXgLXRdbCC3b0s5U-tbc29SexjwDcZOv8BjksiockX0ufwcPxv9ab8tmlB7-Y7t-ndCrTLR2Zje4APfA=w2400"alt="na"></img>
          <p>Sunset</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/MLkHFCnSH6KwiJwWorH1C3eQ5CrdzIB2nwRu9tA_5dbVf2thiuN7L5NduniQcqO9Wbfzf9FpTT94V0wtNyOfRdnC5pQg1aARVxGwOdAM5oxywUPzbrySQ5505QmSkwXo2rV-_0wusQ=w2400"alt="na"></img>
          <p>Sunsets - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/MTXS-rc5E5iL-6Fisp7s5Awk_NP81uU3Rspp_dhDgaFAKQaSkLjSKOmPo7y5ZhUJjN1JB6bEIuiy5TzpbZs4rb3VSF-7W6vMNc3ixd097FVXSq4jn1Y0NGVHA_DcHA5KY8E_0ZqqlA=w2400"alt="na"></img>
          <p>Sunsets - 3</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/AwLdwC1rLtf0A5AF8VYjKvn39SgDxj0SwTyN-Ad0lXXmjuH42tCTcT9j6j0o4iUnMK0nyf1hJJnXkrMjkI_DTqYRYNnyI0mA9EYM2JmHuSMGRoPAsRhM-5PV8celeN1WiOCVRm6HCg=w2400"alt="na"></img>
          <p>Cool Cloud Formation</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/oDvdRcglTmf0QaRjidY2gWHfyKwKE3hZJWqEVgAG0Kd1Oa3mM6rj5zo1eBLJlE2WZEMab4-irEZhyWGaf0KEGYG1uY_jiQEIm1FYouOfEA8XRuISUYy7S1CmRr27gZZcFLODy4_XOw=w2400"alt="na"></img>
          <p>Cool Cloud Formation - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/9TynFhqut646xp0gD0NFjBg11EFXhrjrpg0188K0_7cr-En6ykh_rGL_nzvXxv0AF5joHIU_C6atSQ4yVAncq1x4S4EE3S5HqWkYe65HlqX7VPqBrghh0NE7gJVhlGgm25aVSnaXlg=w2400"alt="na"></img>
          <p>Flowerpot Island</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/f_1PPi4exOHC7eZuPAvF2iqPoR36SvYtvEY_-j4KiW4142UamDAOQ6jij5WVeZ2B7QJ3CIF_gftuc5Dvu9rcCVBMJfoaJWcK1fHfbjb5C741-KKZlpqk1O2rIFjvV5JLX9qR3TpGCA=w2400"alt="na"></img>
          <p>Flowerpot Island - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/e3Owk0uONS2Kch7NcRmIM6plk3t14uVM5u3ejrnwmpCyoYulSxCf2wCsAQvzN8DIIKzCpm40mun-vPN4unZGh11zSBGbe8u3hqxh17t6pCbWUYHwLjou-lokedeIzXL3Haic2hmLPA=w2400"alt="na"></img>
          <p>Santa Monica Beach</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/XRELbx0GmbvxwqhSzSNNtMJmm44QE0GBa1gIGs2DTJpokhMv46vEpuvcp7OH7EUHX2GZManUwkPQeXzYYW_bEQAtJa0LPKLbIm9FXvKYmU9MuD16w8AjNC2wNRy-TE0h-zoeJ4MCfw=w2400"alt="na"></img>
          <p>Santa Monica pier</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/NGrgLSCXg8358Dr37jcvvvG2K9hAadtirfzajEYYz846UXaAYul6s0wFHF7j5wYCMgHI38QedsqnHRz8oZrGQ_wAGi4EspOdXmjmsHuyUdK2LC4Qo5PCPtd4xR_mBH2lJfD_Pk_d4g=w2400"alt="na"></img>
          <p>The Iconic Hollywood Sign</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/JB-kdkYd7H_ScZq8hxC9imKr4-b_kY_R-kvsVx8N2r_dzP9wdQ4fr1OOBN8uD_PX-xfpWIB-THfoY5zdsKRVjRz5BySq8oK9KNlkXn-KGyX-o_i2wpalAA9vnCkIZPU-rgLVCwo9sg=w2400"alt="na"></img>
          <p>San Francisco, California</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/zPiZsTSc-pGgOqzu8z1IJmeHw9_EWxhx6e8CYGtAHTHliwVHlGYXE7MsoGOWzfEOL6mBS6q4HrmctNhLVNwFV5wk5p-r_MFPsVUoUxjL7bm-5yvhcW8hBT7-3tKHBojtPwAQXHzGuw=w2400"alt="na"></img>
          <p>Lombard Street</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/07pBhG-41-6elJJ2ibG7-y8YpnFqdXiw9Usi-xjkY-NBohUAt6OKPHh25YCt2KKZEqRmfMxD2Ze8a7CWXe4RZTEXdwWgk-SWzmofJeHNS8eVjFQirwjXLBM9vq3NCR5aPXKw4NJEzw=w2400"alt="na"></img>
          <p>Lombard Street - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/rO4efuxiGEmVFriE8W1GI3tdPtzTiM7McBxArriqdgcw06F2Hs0oZbSWk6OaF_Tqv2Iv7i3sSjywWWWt9JyFBapOStggTxUD3iUDpGHSuy-_-tb1U6_xa0pVy-x7rbcUcmQkM0SiTA=w2400"alt="na"></img>
          <p>Lombard Street - 3</p>
        </div>

        <div>
            <img src="https://lh3.googleusercontent.com/qrU2X1MtbXveUgqPpGUS2RCJQyOIFxm6bpLrYhyRpfy-XfqopvAssgEsjeO0SbA5-mgrvUPAVe-F1vEubjOY35ugvtOSBUeWY9kynuyb1okoNmdRucjYJaEMKPfaKNIhKdT5nRYptA=w2400"alt="na"></img>
          <p>San Francisco Street Views</p>
        </div>

        <div>
            <img src="https://lh3.googleusercontent.com/U0-6rkviZkePvi2QRyYNHfU2poI-IjRRUHVJE5IRMEqFuOa2k3_g5nT3axUlIbFLGA2boXDVJZBr-vuY-RTNAoVEjj16yj2ggcXq4TUqsEe_0dc6eJhSx_wi939lsjSmA3a0f9NVmw=w2400"alt="na"></img>
          <p>A Modern California House</p>
        </div>

        <div>
            <img src="https://lh3.googleusercontent.com/8dsDPGo_JrWIR8g3JHf3K3G1lsfAZBcDS3vwrKt6DjiPtl42jRU2deGWw0wqdRKMmcuhFFeRLJiUfDGoMJFALrplWaOF-47rH7ggmKLQEK1WHuao2G13DX6kWkgqyEuQa3W77jvFNw=w2400"alt="na"></img>
          <p>The Golden Gate Bridge</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/ahdrIt0tX2zQsM89XWoLBJSjhIxCaQ1KV0ckoTwS-eJ_p8aiLcky05MK2tEyQxdEtZyCSJC8vDuwiOiXQoOJ5-49-bnhL-CGLHzxkuN1in4qfN2BP5WwDgkIn23Ts7zo_qYic12DLQ=w2400"alt="na"></img>
          <p>San Francisco Bay</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/LTVd1qQ82X00VMrI8qSqCQ-kNKjHn9cN_VxGLHEyhUwVaSlpYBy-2xCf3lqzdlkoYU67UwdPcFlpUEf_IZz0L-EdeHz2dxHoCEGnmd1t_IRkVityEV1KChPe3ihuREycMSSo3SSXJQ=w2400"alt="na"></img>
          <p>San Francisco Bay - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/VR-ekwyBrfxAxsHSpME4RZeIHn0D2DbWPrXA3P9NfESWjChetu8FU6oSUqGvu4xREUpUjNv3S6jouA6loKenvzsF7POPlvlAxfImigFU2WU71uKPyh3FHtjt8RqxEXJshgtKWyPg8A=w2400"alt="na"></img>
          <p>San Francisco Bay - 3</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/khj3xg1Hg1epL1pBm76dCAH1ejj9a2uPwbYHY_Fyl_09qmEKCtPfwdbdR0PK9EHzA1kCq1B5cUc7mdUlmHLS9pZ29RmWFdoBvkKYRnGvuktBopSqhl4OxYdNRRblEc3qj-M0-NY1hg=w2400"alt="na"></img>
          <p>Sunflower Farm in Ontario</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/OkBUQc0jVXEvWeJ7QCw0_AlXv6AorF75DNCF_6C3xqFRdL0nSQbWQyJgHRvRBZqRk4Z8ayRcMUKpLGKzU08rZl3EWujwMwT5GltiexEAFTH1Dy7sXmYlBlk3esfV5f5lezrB_0fr1w=w2400"alt="na"></img>
          <p>The Niagara Falls</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/evGAefENwQcXG2bh1bqn5fa2wE2UhXUbDktFJhZNM1JYbzojsWljY4C_TvnLaYY8Un9BI-XX7l2j56eGPI59VX2BbHd_N1XBFoNWsAkTdRTyos1F-Y7uIf_SH54MYKUmLFpynRRxvw=w2400"alt="na"></img>
          <p>The Niagara Falls - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/2KxTzHYra2NgCLRKNnVtnzHhfM3cooHPyqTBn2sO5vFvQmst8OfEDPZ9v10gJ7UP4peME5LrkVMR1tK9kJqfH9Uf8kBd6yRqVuNK2d2nscZOw2zgQAo6FdzTSuDk8eIQf9Qf8ZEKUg=w2400"alt="na"></img>
          <p>The Niagara falls - 3</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/MGZLo4May4k9c7yrYJTfu730e11ghfOufX0qpmyqc6DzYfpQ_L1IB0gTGRYtaUuSutEN_6OWicoB9MHxj3RE8c2zaJfNiGoLMildI0AyvcwCS6E1rscRjO2EqI6r19IYB7WCG6edrg=w2400"alt="na"></img>
          <p>Darlington Provincial Park</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/g24x51NiwkhXMZo-44-s43RPdKfMbZZLeFlHHLmQW3eDkTlg5k41dUFpZKwrzke336LtOjaW86zFkhSJpmkwvYteZj7Dfd4bDwzQ59CL2dyyjwI6BUZH-iRF3bxezTAmJz2Q-tkEsQ=w2400"alt="na"></img>
          <p>Sunset in Darlington</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/JdMUbi25eVSiYZNysuqYUidfBfEGv1_TtuJIvXwF2TjpQ_s0yf2G_WkDpq-t3lXGIZLN3iBEwLaTdBkqxG6SInGr1aSuZD3dgzjWfOlxQ5uT_UeFTUQ4Al9gl988hqdR8s6xojPu9A=w2400"alt="na"></img>
          <p>Hamilton, Ontario</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/uXTCG7fSwBqXPdpkgtXQN8m9-3dMoi7_OVrUSdrd7ba022yjbxRjABeko1peP_WsVHCvhC--a8Xmt_H_BpLgyshzKI3W2aDJ-ICfL6rkccmaiQIUmVOrrxSokwOijQOdk1U6iz3CRw=w2400"alt="na"></img>
          <p>Grundy Lake</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/OGDCDFPkMFgHTMGsN8ddeYAIXkPZu5y46Wdu7bi7TYGh1gpG7cJoCgwKrMMZHyLwUnPSdezizYRuDNSK6TMlPfy0WD1ZvxMeAFLYj2ZH-AgFWUTityfS6r31Gt0thwqvXkIoH-aXIA=w2400"alt="na"></img>
          <p>Grundy Lake - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/akDiKlTkSM_ppB0LC--SsVAO92EYBassLUOJsD6YS2r5Vrf3H9XRSJp09CLSJwOuq6qGi3GKUXS1T3UPQkiWEbK2DMEhjm1YFgfH4zu_xWZl2Rt7YLBdg1XP6_roIChH2ARyAVQwfQ=w2400"alt="na"></img>
          <p>Sunset at Grundy Lake</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/jgy2zil-CeOIrL5o2Beijkc1rWRUALnXBiBgYaABIkmdwjOvm5hzqDaXjflA04CkjZ0xwPfwSNOsDzwp4xPtSO6jmH25UD0OqZKNJE1f0HnO0sfwth1uTmxPq83dqnpzXf8lfWDpgA=w2400"alt="na"></img>
          <p>Sunset at Grundy Lake - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/XsW9j-hmSKBbIWBzSFG6SkrlmA7jM0hYmwIaExHYz4oOurNaOOXJ8gmBKaNPwVLNMhYPJOwpfcTi8ymbiQPcM5csV1lpbi0ZeG55r8qkuZRplc_sONy72_7TPEGjNKx5pJCZm_qVSw=w2400"alt="na"></img>
          <p>Sunset at Lake Wilcox Park</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/MI58IrTkii9Hr_06w6tYJyCJfObq6mf7CHiDxWxJ_76Et_qV47rLotMCf6JhigG6BjZjpgEehm1lABdHuPe59JnKvaFH-TKkGRJzewm37MGJ8ORgAw0CbbXt65tJ7A_kSVWhxEgi4A=w2400"alt="na"></img>
          <p>Sunset at Lake Wilcox Park - 2</p>
        </div>
        <div>
            <img src="https://lh3.googleusercontent.com/IfnXnRvuBG3HyTyt9FS6RWYfdTbAweb0RCzJiOfZVuXNE5YBp1jVrpd_YTru8b7mr57fTkQYleUbQMoU3o1Z3TpYVcbfCbMAYZM3GEQyj2F3IVD9ETyWuV0UpHJqqfOBwwYo4MCsfA=w2400"alt="na"></img>
          <p>Sunset in Richmond Hill</p>
        </div>

      </Carousel>
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
      <div><h1>memories</h1></div>
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
  export default Northamerica;
