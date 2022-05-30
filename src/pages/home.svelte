<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link,
    Block,
    BlockTitle,
    Row,
    Col,
    Button,
    CardContent,
    Card,
    SwiperSlide,
    Swiper,
    Icon,
  } from "framework7-svelte";
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar sliding={true}>
    <NavLeft>
      <Link
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
        panelOpen="left"
      />
    </NavLeft>
    <NavTitle sliding>Watchmovies</NavTitle>
  </Navbar>

  <BlockTitle>Trending movies</BlockTitle>
  <Swiper navigation speed={500} slidesPerView={3} spaceBetween={20}>
    <SwiperSlide>
      <img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>

  </Swiper>

  <Block />

  <BlockTitle>Lastest  movies</BlockTitle>
  <div>
    <Row noGap>
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="33"
        medium="20"
        large="20"
        xlarge="20"
      >
        <Card expandable style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
              <Link
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="head-font">MOVIE TITLE THE UN FOF</div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused
                only on iOS and Android (Material) to bring the best experience
                and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and
                Android hybrid app (Cordova or Capacitor) or web app that looks
                like and feels as great native iOS or Android (Material) apps.
              </p>
              <div class="margin-top">
                <Block strong>
                  <Row>
                    <Col>
                      <Button fill>
                        <Icon
                          class="margin-right"
                          f7="videocam_circle_fill"
                          size="22px"
                          color="blue"
                        />
                        Stream</Button
                      >
                    </Col>
                    <Col>
                      <Button fill color="green">
                        <Icon
                          class="margin-right"
                          f7="download_circle"
                          size="22px"
                          color="white"
                        />
                        Download</Button
                      >
                    </Col>
                  </Row>
                </Block>
              </div>
            </div>
          </CardContent>
        </Card></Col
      >
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="25"
        medium="20"
        large="20"
        xlarge="20"
      >
        <Card expandable style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
              <Link
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="head-font">MOVIE TITLE THE UN FOF</div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused
                only on iOS and Android (Material) to bring the best experience
                and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and
                Android hybrid app (Cordova or Capacitor) or web app that looks
                like and feels as great native iOS or Android (Material) apps.
              </p>
              <div class="margin-top">
                <Block strong>
                  <Row>
                    <Col>
                      <Button fill>
                        <Icon
                          class="margin-right"
                          f7="videocam_circle_fill"
                          size="22px"
                          color="blue"
                        />
                        Stream</Button
                      >
                    </Col>
                    <Col>
                      <Button fill color="green">
                        <Icon
                          class="margin-right"
                          f7="download_circle"
                          size="22px"
                          color="white"
                        />
                        Download</Button
                      >
                    </Col>
                  </Row>
                </Block>
              </div>
            </div>
          </CardContent>
        </Card></Col
      >
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="33"
        medium="20"
        large="20"
        xlarge="20"
      >
        <Card expandable style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
              <Link
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="head-font">MOVIE TITLE THE UN FOF</div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused
                only on iOS and Android (Material) to bring the best experience
                and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and
                Android hybrid app (Cordova or Capacitor) or web app that looks
                like and feels as great native iOS or Android (Material) apps.
              </p>
              <div class="margin-top">
                <Block strong>
                  <Row>
                    <Col>
                      <Button fill>
                        <Icon
                          class="margin-right"
                          f7="videocam_circle_fill"
                          size="22px"
                          color="blue"
                        />
                        Stream</Button
                      >
                    </Col>
                    <Col>
                      <Button fill color="green">
                        <Icon
                          class="margin-right"
                          f7="download_circle"
                          size="22px"
                          color="white"
                        />
                        Download</Button
                      >
                    </Col>
                  </Row>
                </Block>
              </div>
            </div>
          </CardContent>
        </Card></Col
      >
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="33"
        medium="20"
        large="20"
        xlarge="20"
      >
        <Card expandable style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
              <Link
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="head-font">MOVIE TITLE THE UN FOF</div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused
                only on iOS and Android (Material) to bring the best experience
                and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and
                Android hybrid app (Cordova or Capacitor) or web app that looks
                like and feels as great native iOS or Android (Material) apps.
              </p>
              <div class="margin-top">
                <Block strong>
                  <Row>
                    <Col>
                      <Button fill>
                        <Icon
                          class="margin-right"
                          f7="videocam_circle_fill"
                          size="22px"
                          color="blue"
                        />
                        Stream</Button
                      >
                    </Col>
                    <Col>
                      <Button fill color="green">
                        <Icon
                          class="margin-right"
                          f7="download_circle"
                          size="22px"
                          color="white"
                        />
                        Download</Button
                      >
                    </Col>
                  </Row>
                </Block>
              </div>
            </div>
          </CardContent>
        </Card></Col
      >
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="33"
        medium="20"
        large="20"
        xlarge="20"
      >
        <Card expandable style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
              <Link
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="head-font">MOVIE TITLE THE UN FOF</div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused
                only on iOS and Android (Material) to bring the best experience
                and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and
                Android hybrid app (Cordova or Capacitor) or web app that looks
                like and feels as great native iOS or Android (Material) apps.
              </p>
              <div class="margin-top">
                <Block strong>
                  <Row>
                    <Col>
                      <Button fill>
                        <Icon
                          class="margin-right"
                          f7="videocam_circle_fill"
                          size="22px"
                          color="blue"
                        />
                        Stream</Button
                      >
                    </Col>
                    <Col>
                      <Button fill color="green">
                        <Icon
                          class="margin-right"
                          f7="download_circle"
                          size="22px"
                          color="white"
                        />
                        Download</Button
                      >
                    </Col>
                  </Row>
                </Block>
              </div>
            </div>
          </CardContent>
        </Card></Col
      >
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="33"
        medium="20"
        large="20"
        xlarge="20"
      >
        <Card expandable style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
              <Link
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="head-font">MOVIE TITLE THE UN FOF</div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused
                only on iOS and Android (Material) to bring the best experience
                and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and
                Android hybrid app (Cordova or Capacitor) or web app that looks
                like and feels as great native iOS or Android (Material) apps.
              </p>
              <div class="margin-top">
                <Block strong>
                  <Row>
                    <Col>
                      <Button fill>
                        <Icon
                          class="margin-right"
                          f7="videocam_circle_fill"
                          size="22px"
                          color="blue"
                        />
                        Stream</Button
                      >
                    </Col>
                    <Col>
                      <Button fill color="green">
                        <Icon
                          class="margin-right"
                          f7="download_circle"
                          size="22px"
                          color="white"
                        />
                        Download</Button
                      >
                    </Col>
                  </Row>
                </Block>
              </div>
            </div>
          </CardContent>
        </Card></Col
      >
    </Row>
  </div>
  <!-- 
  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem link="/about/" title="About" />
    <ListItem link="/form/" title="Form" />
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised popupOpen="#my-popup">Popup</Button>
      </Col>
      <Col width="50">
        <Button fill raised loginScreenOpen="#my-login-screen"
          >Login Screen</Button
        >
      </Col>
    </Row>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised panelOpen="left">Left Panel</Button>
      </Col>
    </Row>
  </Block>

  <List>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List> -->
</Page>

<style>
  .head-font {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: block;
    padding: 2px;
    font-size: xx-small;
    color: rgb(0, 0, 0);
    text-shadow: #000000;
    justify-content: center;
    text-overflow: ellipsis;
  }
</style>
