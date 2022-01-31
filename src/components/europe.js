import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Europe extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab : 0};
  }

toggleCategories(){
if(this.state.activeTab === 0){
  return(
    <Carousel className = "europe-gallery">
      <div>
        <img src="https://lh3.googleusercontent.com/6BuEDyzbWc0wEYMhZux6K2s5LdWurkkMHxHehX34Yzu15cPSLRjnuB2a-a59NUOpBvuUwJ8AaIIUsNOIufRXZcCUzyNypGoM686SROZRrp41q39DVv0Ml5LWRtr38WbS1KuhmQ1kdA=w2400" alt="eu"></img>
        <p>Mykonos, Greece</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/gwQc0DZALBRhi6wuqqRtaHThYP8zNxkbF73lP-nj4YTXZu97aR5aH3yG4KwrRJm2nBecr7XeCk3QaomfzblMj9INDTlRbc-X0fZIvZkzRNtmccvoinbS8l_51UztRncP5yTOAEB5Ag=w2400"alt="eu"></img>
        <p>Roofs of Mykonos</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/dToaQCP5wZvFtSrixSw8LRWxL9zmin2B3wvb0vPpZSvqMBWYQoGrE6S6PTyizKmlCUKUQfHJGRtkDa3MhNeJpyGaaC8by9mKZCDCcQJRAe6hmbb-927tkGUkOTlkDLmDBU2WK_jTOw=w2400"alt="eu"></img>
        <p>Little Venice in Mykonos</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/hKRalgYO1OLdu3nKML40nLSTk73wii-UXmuVGZzW8JBkIAZuRqCJtPNVCRGmdLg5GRW0-ahofiFNugqUaL5u5o-XlHSEO8HkMyPYz7CRwep7QLZShHj0yODeOde96WlSGwtgJ7kXeQ=w2400"alt="eu"></img>
        <p>Paradise Beach</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/_Rg5_AyXnctIXuSOJI6GFFgGfbpRwpP628-amQOk21lFvfpZ1lWrlBudI8Tomp-moRjnenWHiykmPvaBE_5hRcFC29zlU_poXmS-MncIKUuk2eRQEJzoEbYQ16ksoyWGFWmZBIf8jA=w2400"alt="eu"></img>
        <p>Venice, Italy</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/yqduuvQup4BdirBEDvYNImgNYbDwSSDjqy-gMhtntKaxF2HNc3qPgtxQWFpOAq3N2jUM8gWF7e3hPGCu639vtsD2cKgqfnWyLtp1G-zb0rfTr-WQod31uylspjbULf-70ePm6MQkYQ=w2400"alt="eu"></img>
        <p>Venezia, the sinking city</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/0_R9Kgrg2-UWoo3T9HOznbuCjtyF9etKM8mgDmUyM0qyWzaad9Dz9tPhJ6mcY7hyscw4ruE1g1Gjna8WwhJFFrp0S3oZqjwPdjtrsv__c_0M4hNJH_bGTIvz4JWrK_qQbhYySN3gaQ=w2400"alt="eu"></img>
        <p>Sunset in Venice</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/dIEyf-zjEwlcpgWcMlRGU1fzV7EXH4uUPJa773d5nX9T2g0-nCoIB89ySugxKrnaV3PlX2HGC8f1JHf_SMJr5uBIERlI0MABeVVGZ818T5540Vh897ii_lgz9Sjl9kAkiqL7hEd27g=w2400"alt="eu"></img>
        <p>Rome Colosseum</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/-V9LGaRiIB80nNX0feymqO9HmdjjkHhvdKNjw7i9xP0c4-PSmCddPnHIkaUosrxNXqz4bKB07DPdUda_sMR6ZfLl1IAdKAGUc-O44xJY9TRPPo1Y_C6pqDeIn6-Xjf23V5rtKbwjQA=w2400"alt="eu"></img>
        <p>Positano, Italy</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/EGvclLUy6i2iObOkTjhRar8x9-RwKoWLjGiV2dlzaHM-P2XtVCRlmLOh-Bq7x4YMSp6wK7tUk3yoU6ox_VRxHpslWDvXcaEVsBVT3A_yDOKHyEFYMJ6-1DvmDxUOcsT7O2OpM7GjvA=w2400"alt="eu"></img>
        <p>The Sorrento Coast</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/fud10nWqW5rYpS-TKXP-R7MZHMUgjFHGO1pyyT2RDmskEq-ONsswWXXdYFEcYPmNfihGrAr1KCNMNu-Fvxm2rdec6yekFriqwn_5uUyx1ivRDGKDS559y2jmR0twugytziubhGRNhQ=w2400"alt="eu"></img>
        <p>Views in Sorrento, Italy</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/xNdiiy65IQKIM1g1yPpQqp26O4nzTmlkzwBi7FbFsAiEgHynGC15a_7CyeoZms7FtxWfJ2mZZg-XBuE1At8Ocx2O-6tInJi_NsYfzSEn_oJbRNXkgNWX7HRHPjz5K0vbiV-HdZPVsw=w2400"alt="eu"></img>
        <p>Pompeii, Italy</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/xp8h9nNTuokkTuL9GYpDcWWREFtDz5hH2qKpdsP1QmMGV-M3XRm5iBHV2R_KyIgKfX4Dk5ohTofk7SdF6_x-7r4Qb2Y1ulDe_Rnz47MI2hTj610AnPpeSMeogPe19KVjWqGvSxpQWg=w2400"alt="eu"></img>
        <p>The Parthenon</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/jsoDvcgedtQC_V5QNa6fyKUiJSbCNh4vm66kRiaQrRLDffEackedK7jjYHgB44DW1mhF_mAkawol4IY-_IHW7w8XB2G-dgyraVDllhO_sJNMUA5g2-S6KqMTfSdzxEgKlcBG9V-lkg=w2400"alt="eu"></img>
        <p>Rome's Palatine Hill</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/ha1nuMXphyMP-06bOpjK4g9CZT2RtVayWpMSeJI1fvu1De7_O4d2oUddWdqSPHVIp6ak-aTu8c4ybfPn6yDjXOSLuFau8tGmB7EPgQNZhF3fX6MsmfLe0Aca8SUxkGi2wZUfPPht-w=w2400"alt="eu"></img>
        <p>The ancient ruins in Rome</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/72uagYn6C7DO9OI89GsFJxJPV5O_-9jtCV53STRADKGW_GBieChhxOfa1SPg2HHklu254OxQUjsLIRrPqBKcE4JwE0PZZ5hrnovEUoI6CmS4LIpZ65_vVYaVWYC7vvAtETiw3x-Ydg=w2400"alt="eu"></img>
        <p>More views of Rome</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/M3xgKzxWSWRinm46armfZP9iKTkjhSiErtYcagW9adnxb4Bee7TidTlyJjvIZaMcyNpUaaN1EK0lsaHFfGi_1sS6ygUf7gO_HVLc606WKHnQ_6uGNKrz9Whbdu--i3WxPVblCpYyBg=w2400"alt="eu"></img>
        <p>s</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/GeQDUKBzDMIa-T2vs3iG5OGMa0egIT_WwJO2FX_8AKDFY__uLR9gEYKqwDR_VXBk5QAMBBBz3TCvG0I6HTEui4zIOy8bRa4QKAX_aDAcujc0aLfqijZf--5GmqMqlW-Gu49MVZBRKQ=w2400"alt="eu"></img>
        <p>Heelllooo</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/EcfizMf_C3Y1OxEcH5WzJNdoBgodjFv7hP1o7OxljYsJ-LyB7G4cacct9qdvSyJQGusOJaJehSC73EVsKHXghcqFGRhzPmQNzoADj1UmG_aI-H4h1o1AhuIsehwbrJ2KOYoV703fQg=w2400"alt="eu"></img>
        <p>The Tower Bridge in London</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/apLkZUPWC8r0Vbq5SZxIXiRSDDyXndkNtkk8Z4ve_6NXeu5ynd-2wjHwbZQiFf5FUXRAnebzNGTC8MppKlLYerbowP0jCD-eJhWFYkm15jn5M-RTzakAmMaGYS0zzQ6wEgRbAEgF-g=w2400"alt="eu"></img>
        <p>The Big Ben</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/X7m7kJuETuL4SrXnRLA1ilxLtJhAs003060Eg6sArUV6K97IXm7NFjC2bG6UNPUZYvlByfJttfskW8kqv66lZoaBbUmwSwc7hKexuAp_iizTvAdbjCo-UHsNpatnP_azthCp51raJg=w2400"alt="eu"></img>
        <p>Stonehenge</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/c6izNq6CwiDFy5f24MQ4j_-7-DZCNEgzHJAyymwqR_n9nxt5zPaDyJK0aiP_AfAS-iGVIFTZY2tG4hiIdppN462R_zJTNuHjM1mtV0ZkUskpdAYAh1_c4CyN_tr0fyU0PEOa74UL_w=w2400"alt="eu"></img>
        <p>Nyhavn Harbour</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/cxfp6ZN-vzQ6eXHBauk12mBBe8tgbpQkVR7YbwzECZe_ltuVBnQtrQACSJ-00J_22xKUXWfDryw1AYrRjDWiGUHMY2-EBy_1IIK78oXs6aZUkmjS2VqyHOhsXeJ8a9l5bhO70Nv-Rw=w2400"alt="eu"></img>
        <p>Copenhagen, Denmark</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/tgqbTPDbf0cMg3sNhestsrWFRKvgs9tGL1ry3jzk3zteM4jYRx3kqqrxC9M6O-wmE2wCHsHT569OUUhabBNlatuFVErOuYEat-CKLpJqv2f7mIA-eScFDuof5USPIG-0LYHCMuJJsw=w2400"alt="eu"></img>
        <p>Copenhagen, Denmark - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/YJDd3uAdipKd7dakX9hbnNwP5Z8EklzNHoIo_8LZdrGJAFbEx1fkj837NJK2k1j4V22IPvxRStDyXxh0jhv3r9okK6mVlBYjZ653hp-rBrpS3PhsPsEOD4-ncbuHRG0r53im9_EsbQ=w2400"alt="eu"></img>
        <p>The Holocaust Memorial</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/6kwEczE4xtCupb1rG3tV3GQ2xdDGSpdoofBBlFmztbjzqCiUnahe0qD694_Q48f6aZtCf-ZJFFvL25_6b5nLwQkMz8Eh9BtDnYmHGSvoiw-cCJUxHao5DNIzyd2lvFYGco4K0ryAkA=w2400"alt="eu"></img>
        <p>Peterhof Palace, Russia</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/f3mMttzdGFyDpysnRsW1IEUsKLg8UYU3lD9MTtfxadiia0G_U1AApFewf0gHziFzNzBavUItQExlRm949UgPWARRJXETMwYSSy-lokJdu2ftjwkAVyoprPWSXkej4Gz5OwSohpV6nw=w2400"alt="eu"></img>
        <p>Peterhoff Palace - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/lOhbV_Crtfuh7hKDKClRwTovrE6DjenKZSaY3dSIWA_fc4QEKvqvZLZ5dq_zrkfcuyf81d1613hNIpSnX6w9eysCeYKi8Ytt7UWeopDLaR_M0UBAw6IEDh3IcRZRS-rmvDTCcvj4fg=w2400"alt="eu"></img>
        <p>Peterhof Palace - 3</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/qC5uNYz8ytx6AKR4HGnU1-5epTzTTfQnQQSxoruefHZ0hyM3mozWv8iQ3HltM5isF93MqFfd6JRqyOIpItGsyn90tBG_tPa55FEo1DNSREpwng2VVlhSgQ-5rhLb6fKsd3o5iqqLvw=w2400"alt="eu"></img>
        <p>Peterhof Palace - 3</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/_CPP7HaUqqdddtfmw3iFEGFV4KNKpbsv5YEPyMDzVhy1SaZz09JVf0pPVRMQhqjaOXLPrkbcpSu57i58bOQQnlaiIVrZbYo91ov_qWH0dXSXDT0nOyFlYAcssDALHPu2YIW9B9526A=w2400"alt="eu"></img>
        <p>The Winter Palace</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/aiR4nc0-yInFExN25S7xoDRekmhCgc5JC8gbnJz1O2Hwsd1_pt1QX5ZkALavW0sHNBC1-3sahQL40d9ZbFZCy2obDyqp1hdLpMmHeUVdqw4vbv3f3exTseckvibEKtsx-MwyaZc_Gw=w2400"alt="eu"></img>
        <p>St. Petersburg, Russia</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/KmmZ78k4fLdI_qNCtNg7ZdrQ1dBeD_mdneuJH9uRyG3pdsxB4dgnnum5ApEXKiRuaOpSrwD2yqpGZJml7AqFh--5t5RV7tI_vGr725RirjvGy0UL0_keDz4bbh1KlhwDyqn-85BjVg=w2400"alt="eu"></img>
        <p>Lutheran Cathedral of Helinski, Finland</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/LyHThYFEL_1PYRQUaJRF4tUk6lbsXToieEXdidWNCnNI-VHk13V1D9xizHJR8JyODVKexwJhqRYnzCqxNCGaMVj9aHdffaVXSIM0wcALI-zYirhoxPdM4GrFxlXE-bLJNpQT0no8wA=w2400"alt="eu"></img>
        <p>Ljubljana, Slovenia</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/TZfC50FYxWQEvNRFzKPNvMxFnhx-Yyog3EeGAobCTKEOazW-oGe80MDJT4BoTtlguli36oU8i550mODVshjBTWjkCx4XOE7czjBCT5w0s7UiN26IPn_428gG8m_yioNH5lDKxmDC6A=w2400"alt="eu"></img>
        <p>Ljubljana, Slovenia - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/ZGOau-R-7EakNoudz26K1h0F45ypCoQOFFWjhQkSly1IQ0Llfq7L002zB3sO__8qS9txWFAoOjr3KMr7s1adG6OJrek47tFDlGW_ydygOBaVpQhXgbGF-0ZiBaNTgEWBZjoreZF8yQ=w2400"alt="eu"></img>
        <p>Ljubljana, Slovenia - 3</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/6BVMj9uakwZB_c_H_ksFDpxQQxjIBevPPdrIrvs3OFaqh-q6x9L2-a-zHvoNrxjZqE4EeJGcc-zddoIsVesw2DIQ7YFrptWcO-JUAJvvgY3ed_XIPvmB_tMg9GomJpuC8E9yz8XAMA=w2400"alt="eu"></img>
        <p>Ljubljana, Slovenia - 4</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/MxVMnpQyhxrcsXRo9E1glZvh4OjOi2L15_fQeeJNrXVUxVHboH8fA8s_B540k0JNqxVf_eSsFAepTXQsv96Ka3uz7oBbf3u9SiuZvyCPA9E9-1XnXVycfPYaVc95_KBHa1dSQqJIEg=w2400"alt="eu"></img>
        <p>Waterfalls of Croatia</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/FUFINAA7V5Rtf3f-coyr914yGwOas3SWTLOQVv2nLZzbCeNqRv27zt6vqB9_-WXrVtlVRiP32F3_7Np4gmY-yKsrjdPFiVGJZiAoUuW-oUciEYjsTlJi-VG6ZUVG9OAob-VhMZVcKg=w2400"alt="eu"></img>
        <p>Waterfalls of Croatia - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/HaX0S56PvKrs8sCnAKMTvzgpZx08QsBHWTzgDaE9kVBod1VUEkUwY-yPTMGS5GGjNNeyQz6XkMP8PrkSOnECy3hqm1d4Ur-Vbai3SW3Qr96lHZSk9mbG8C5eDAfXsaJy9gcb18ExOQ=w2400"alt="eu"></img>
        <p>Plitvice Lakes</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/aFEQSsUFY_ev3IwA24ZcH7Y73Gs4VLiveSMMKbRCZ4o7MZLZMu1EkowaoxZQ0YRMFE82IfC93rBK2iqq88VVVcx1Yhb8MjaEz0qNdOESwbpqUbh795klBrZI4WK85SWLYhn23a9xjg=w2400"alt="eu"></img>
        <p>Plitvice Lakes - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/4fk3_iiLjX8BuyKd9u9Gig4BOjFaTD5wWaJDAt0YuH0Ac9YPoB2fuPmuBmmnGlGw50SvxAy9Fqs37t41HsqMLoqy77EUcpdSzXZ00Bs_T0SyLUJpD-0Do7Wk9jC_Jp5aognmLoQzNQ=w2400"alt="eu"></img>
        <p>PLitvice Lakes - 3</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/Inv-pfiyR319bY7blPGS5VVBq8vC_ISdqMEoaAl1CXWCVv1FiAgDFiy3oFh6rKc9zoLQuZ0ZRxVvDH3pTaGcyPnwktyXlw4bLyl_1Wh4W42R3b_iDB_wg5_2Z4v4wW106zlbKs72zw=w2400"alt="eu"></img>
        <p>PLitvice Lakes - 4</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/Z7IJHGppFSlr0Gl2I3d3BSSSUglet_HZjR9Q2ZwSe9pX6YkoOmo_zl4dCRg4E_DX2i4DuLcv9d8eVLJa-WzN1scgzdGfn4HJgyKN22RLaSeI001uYLwRku53Gphdhf5eDX2r5g459A=w2400"alt="eu"></img>
        <p>Plitvice Lakes - 5</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/fp1Va9wrNVy4ctmKuRfCCt-67f4yQhJbRW2dlcUJMp_Bz2EJ2zl_TKRklDkE8XzuCvji2THGXL42dEYDx32-YwvJsuPxL5VQTBQ9itRWBW7w58u1mmply0aElwizOCF9XEQFYlv4JA=w2400"alt="eu"></img>
        <p>The Hungarian Parliament, Budapest</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/JJ64CfmIOyJxEIrBiDhglKJAzzuenGh-PglMrLkNlvnyhk0tRqceM91PFBlXvOPqIajMlAgcEDpYXa34NsNCKIe1kuyJhZE4l0dKSyiOQ6Csr9DC1GocnGzd83O2KcMcjSA6Ty7sbQ=w2400"alt="eu"></img>
        <p>The Hungarian Parliament - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/JhV1CzcC8HuP70UkfbxnBXO-BB7MOTCitd_6WrV0OzOFwcc62KLfF_POLf0SHDC5rHCNLge1rNDXBhEFXspwY6NYJiBGb4itpcbMk-5lskBmNmmxfQO2KaFpQJ28PYk2tR6slLkhcQ=w2400"alt="eu"></img>
        <p>Budapest, Hungary</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/-3BkQpM6x2ArLb8fX7XznX4trfVm1XqM74WzANkCMnY3ynd2J14a2f-bBOpVgkfSGycGI9du10YIeD3Ob5OFp01R09ymjMuwuF-2Cx-zhJmwajIimynONYTvCgcnNDK-Fth5zC0ZYA=w2400"alt="eu"></img>
        <p>Budapest, Hungary - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/eYcmmj3KeV08Cq6FW0sVM8nhqszt1TCbn00_-zL0oZEm1TZHJG1oZ_9PFc7eZpHDKfY4g12qtbxnjbgecaWlfPbkLykK8BebBkKvEPPK5aHaj-6PGl5POh_zrUMHFMKJ2MX-v0uCuQ=w2400"alt="eu"></img>
        <p>Budapest, Hungary - 3</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/l3yxvBiSZe2I9mYERwxBzI2_GwB_Zkf9Mtj4ioTnCTYTBv7hJb_dHslH3qdQY7T_N80b2eIJeuLLsNVeZGI-6utbJo0ehEXbhN7J3fcYwsoXAjh8_iBxFdnPvDD-HmM4pXFXrheFHQ=w2400"alt="eu"></img>
        <p>Budapest, Hungary - 4</p>
      </div>

      <div>
        <img src="https://lh3.googleusercontent.com/NFEVRe3Gi8rfRKJOSv6BtvyD_tWxlI5sZmSbh2cX08eeh6Qcrcv2yiwGCcBobnClNTdsSh_54I-ySGkK4U_M-MGJt_Ch8NUi1rJT_PLlO_k9oZ5H_380nx_nmOyqjsSxgnfuEOb6zw=w2400"alt="eu"></img>
        <p>Budapest, Hungary - 5</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/q_gkXheMLCty0fN-OJTPvpB-x0Vw8XlwwVhfpOSgxZ2GpZqLjqxSNeUw992wikhJYIkOT85zJq0rAhlyMzrhey3o4ptvk2cvl55dPFUrIiNZxHx5as7_mQCWidrzBUS54sEc55mdsg=w2400"alt="eu"></img>
        <p>Budapest, Hungary - 6</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/q4Twbh6fZJZ_bKWK4drul84NovSjiOsTnce_-u6i6Udv7HAPR8wMDOvxXAOUkEzpYNVS12jfiAn_wsEDi-htup1fsy_NVDr1rHrx75u9OImwmVVnrsWV7Uxrh60WXojv1Mq0kXrd3Q=w2400"alt="eu"></img>
        <p>Budapest, Hungary - 7</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/xtnNeBTNVr9brZPaSwnGIRL2wcLIbLmy2lzCJW2b5QQIYIzuJ9ujXn8Z7R5iJ3RixzDvoCboeqKwJLMsie7IrjQycxdXa0SWob8yQgc1DzY_a_d3O6U51rXZ4DVWJ1THEgGP3nGvOA=w2400"alt="eu"></img>
        <p>Castle Hill, Budapest</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/-iu1rfdOrHx_AMkQzEcJ7g6BuezGLVnNOxQUY4Ac9K445DEmh4oHzKPiC2vUz2CCYxG3DlShh5Pi1PNaTLotyiz8zaAZqW40vRE410d1k4htA5MWe4ljQDXpBEZIWt1sAt5Xdm_WDA=w2400"alt="eu"></img>
        <p>Heroes' Square, Budapest</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/1S0wkdi62DYpMc5dis_MbPjPiaT2UD0nypE9ZH_mDCwaoUDebF7OY-9Z4wi5tW-G7LPH8no-gT4RFiZJG1XLTRwHk4Yl8Ry25Ar8RiSVg8NUBOaxCbppDX_647d2_bo-aIWRh9dFCA=w2400"alt="eu"></img>
        <p>Telc, Czechia</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/WlDml2_LKaZ-cQMIuWtASoEZQkPB2lykU4VfkwXXYNg0ajPk_jd2SAZgifa0dxtsBdohkbFqdsNvI3q22Q--vbXForydEY9oRQ924xx0iUSeUOXXXdcd0klCyLBanir19AD0oniuNg=w2400"alt="eu"></img>
        <p>Telc, Czechia - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/IPrCDDEBjtboayPzu3AYnOTqnrjh35cVtwl9Vot4lFNsvO67010Rs_p5Uq7sox2hUVWP8PilLnOjlSubyeXp2A7FG2XPhps0bgvtginqNk0RYrid2zaFChbvCzHO_hJAYGa_Yejrqg=w2400"alt="eu"></img>
        <p>Sunsets in Prague</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/4WMhM0gkFC8Rk_FuagvUR9OuOxB5JG4LQgCDf8YzmX7Fjd2m6IbwgJ7OtjvChaFvWmv3Mieysmk9bH3MW1Wao2hBUy-lrbL3xJY4ulsaXdKMv7admMHC6NCVLSyp_om6pL4bSflk2w=w2400"alt="eu"></img>
        <p>Sunsets in Prague - 2</p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/ekxpBYvYEFZQxk6H5ciQP6ksFNzvP8d0TpQg5CDBWaoulpJN5TQtY_q_Cp2u2Q391ArabScxTrghZITOOuJ5S4Bv4h6LMEGYXtxxYpqwJAfHpJfUXUWc1npROnXeyn4VPLRQjzFjXA=w2400"alt="eu"></img>
        <p>Nighttime in Venice</p>
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
export default Europe;
