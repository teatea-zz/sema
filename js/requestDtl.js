const urlParams = new URL(location.href).searchParams;
const nm = urlParams.get('nm');
console.log(nm);

async function getDetailData() {
  // const dataAll = data.DATA;
  const detailData = data.DATA;
  console.log(detailData);

  const detailDataInfo = detailData.filter(
    (item) => item.prdct_nm_korean === nm
  );
  ``;
  console.log(detailDataInfo[0].main_image);
  console.log(detailDataInfo[0].matrl_technic);

  const detailMain = document.querySelector('main');
  const infolmt = `
    <section>
      <div class="detail-main">
        <div class="detail-info">
          <h2>${detailDataInfo[0].prdct_nm_korean}, ${detailDataInfo[0].mnfct_year}, ${detailDataInfo[0].writr_nm}</h2>
          <img src="${detailDataInfo[0].main_image}" alt="" />
          <p class="body4">
          ${detailDataInfo[0].matrl_technic}<br />${detailDataInfo[0].prdct_stndrd}
          </p>
        </div>
      </div>
    </section>
    <section class="prdct-new">
      <div class="line"></div>
      <div class="badge">작품해설</div>
      <div class="container">
        <div class="detail-text">
          <p class="body1">
          ${detailDataInfo[0].prdct_detail}
          </p>
        </div>
        <div class="detail-info-list">
          <div class="detail-info">
            <p class="body2">작가명</p>
            <p class="body3">${detailDataInfo[0].writr_nm}</p>
          </div>
          <div class="detail-info">
            <p class="body2">작품명(국문)</p>
            <p class="body3">${detailDataInfo[0].prdct_nm_korean}</p>
          </div>
          <div class="detail-info">
            <p class="body2">작품명(영문)</p>
            <p class="body3">${detailDataInfo[0].prdct_nm_eng}</p>
          </div>
          <div class="detail-info">
            <p class="body2">제작년도</p>
            <p class="body3">${detailDataInfo[0].mnfct_year}</p>
          </div>
          <div class="detail-info">
            <p class="body2">수집년도</p>
            <p class="body3">${detailDataInfo[0].manage_no_year}</p>
          </div>
          <div class="detail-info">
            <p class="body2">재료/기법</p>
            <p class="body3">${detailDataInfo[0].matrl_technic}</p>
          </div>
          <div class="detail-info">
            <p class="body2">작품규격</p>
            <p class="body3">${detailDataInfo[0].prdct_stndrd}</p>
          </div>
        </div>
      </div>
    </section>
  `;

  detailMain.insertAdjacentHTML('beforeend', infolmt);
}

getDetailData();
