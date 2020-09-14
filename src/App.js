import React from "react";

import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  Button,
  Placeholder,
  Banner,
  FormLayout,
  Div,
  File,
  Input,
  Select,
  Textarea,
  FormLayoutGroup,
  Radio,
  Card,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Icon28TargetOutline from "@vkontakte/icons/dist/28/target_outline";
import Icon28CalendarOutline from "@vkontakte/icons/dist/28/calendar_outline";
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Icon28CancelOutline from "@vkontakte/icons/dist/28/cancel_outline";
import "./App.css";

function App() {
  const [currentPanel, setCurrentPanel] = React.useState("create");
  const [showDate, setShowDate] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  return (
    <View activePanel={currentPanel}>
      <Panel id="create" centered="true">
        <PanelHeader>Пожертвования</PanelHeader>
        <Group>
          <Placeholder
            action={
              <Button size="m" onClick={() => setCurrentPanel("selectType")}>
                Создать сбор
              </Button>
            }
          >
            У Вас пока нет сборов.
            <br />
            Начните доброе дело.
          </Placeholder>
        </Group>
      </Panel>
      <Panel id="selectType" centered="true">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setCurrentPanel("create")} />}
        >
          Тип сбора
        </PanelHeader>
        <Group>
          <Banner
            before={<Icon28TargetOutline fill="3F8AE0" />}
            header="Целевой сбор"
            subheader="Когда есть определённая цель"
            asideMode="expand"
            onClick={() => setCurrentPanel("targetedDonation")}
          />
          <Banner
            before={<Icon28CalendarOutline fill="3F8AE0" />}
            header="Регулярный сбор"
            subheader="Если помощь нужна ежемесячно"
            asideMode="expand"
            onClick={() => setCurrentPanel("regularDonation")}
          />
        </Group>
      </Panel>
      <Panel id="targetedDonation">
        <PanelHeader
          left={
            <PanelHeaderBack onClick={() => setCurrentPanel("selectType")} />
          }
        >
          Целевой сбор
        </PanelHeader>
        <Group>
          <FormLayout>
            <Banner
              mode="image"
              size="m"
              background={
                <div
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    borderRadius: "9px",
                    border: "1.5px dashed #3F8AE0",
                  }}
                />
              }
              actions={
                <Group align="center">
                  <Div style={{ marginTop: "0px" }} />
                  <File
                    mode="tertiary"
                    before={
                      <Icon56GalleryOutline
                        wifth={28}
                        height={28}
                        fill="3F8AE0"
                      />
                    }
                  >
                    Загрузить обложку
                  </File>
                  <Div />
                </Group>
              }
            />
            <Input
              type="text"
              top="Название сбора"
              placeholder="Название сбора"
            />
            <Input
              type="number"
              top="Сумма, ₽"
              placeholder="Cколько нужно собрать?"
            />
            <Input
              type="text"
              top="Цель"
              placeholder="Например, лечение человека"
            />
            <Textarea
              top="Описание"
              placeholder="На что пойдут деньги и как они кому-то помогут?"
              onChange={(event) => {
                event.target.value !== "" && event.target.value !== null
                  ? setIsReady(true)
                  : setIsReady(false);
              }}
            />
            <Select top="Куда получать деньги">
              <option value="first">Счет VK Pay • 1234</option>
              <option value="second">Счет VK Pay • 5678</option>
            </Select>
          </FormLayout>
          <Div>
            {isReady ? (
              <Button
                size="xl"
                onClick={() => {
                  setCurrentPanel("targetedDonationAdditional");
                }}
              >
                Далее
              </Button>
            ) : (
              <Button style={{ backgroundColor: "#B6CFEB" }} size="xl">
                Далее
              </Button>
            )}
          </Div>
          <Div />
        </Group>
      </Panel>
      <Panel id="targetedDonationAdditional">
        <PanelHeader
          left={
            <PanelHeaderBack
              onClick={() => {
                setCurrentPanel("targetedDonation");
              }}
            />
          }
        >
          Дополнительно
        </PanelHeader>
        <Group>
          <FormLayout>
            <Select top="Автор">
              <option value="first">Elon Musk</option>
              <option value="second">Bill Gates</option>
            </Select>
            <FormLayoutGroup top="Сбор завершится">
              <Radio
                type="radio"
                name="radio"
                defaultChecked="true"
                onChange={(event) => {
                  setShowDate(!event.target.checked);
                }}
              >
                Когда соберём сумму
              </Radio>
              <Radio
                type="radio"
                name="radio"
                onChange={(event) => {
                  setShowDate(event.target.checked);
                  setIsReady(false);
                }}
              >
                В определенную дату
              </Radio>
            </FormLayoutGroup>
            {showDate && (
              <Select
                top="Дата окончания"
                placeholder="Выберите дату"
                onChange={() => setIsReady(true)}
              >
                <option value="first">20 сентября</option>
                <option value="first">30 сентября</option>
              </Select>
            )}
          </FormLayout>
          <Div>
            {isReady ? (
              <Button
                size="xl"
                onClick={() => {
                  setCurrentPanel("snippet");
                  setIsReady(false);
                }}
              >
                Создать сбор
              </Button>
            ) : (
              <Button style={{ backgroundColor: "#B6CFEB" }} size="xl">
                Создать сбор
              </Button>
            )}
          </Div>
          <Div />
        </Group>
      </Panel>
      <Panel id="regularDonation">
        <PanelHeader
          left={
            <PanelHeaderBack onClick={() => setCurrentPanel("selectType")} />
          }
        >
          Регулярный сбор
        </PanelHeader>
        <Group>
          <FormLayout>
            <Banner
              mode="image"
              size="m"
              background={
                <div
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    borderRadius: "9px",
                    border: "1.5px dashed #3F8AE0",
                  }}
                />
              }
              actions={
                <Group align="center">
                  <Div style={{ marginTop: "0px" }} />
                  <File
                    mode="tertiary"
                    before={
                      <Icon56GalleryOutline
                        wifth={28}
                        height={28}
                        fill="3F8AE0"
                      />
                    }
                  >
                    Загрузить обложку
                  </File>
                  <Div />
                </Group>
              }
            />
            <Input
              type="text"
              top="Название сбора"
              placeholder="Название сбора"
            />
            <Input
              type="number"
              top="Сумма, ₽"
              placeholder="Cколько нужно в месяц?"
            />
            <Input
              type="text"
              top="Цель"
              placeholder="Например, поддержка приюта"
            />
            <Textarea
              top="Описание"
              placeholder="На что пойдут деньги и как они кому-то помогут?"
              onChange={(event) => {
                event.target.value !== "" && event.target.value !== null
                  ? setIsReady(true)
                  : setIsReady(false);
              }}
            />
            <Select top="Куда получать деньги">
              <option value="first">Счет VK Pay • 1234</option>
              <option value="second">Счет VK Pay • 5678</option>
            </Select>
            <Select top="Автор">
              <option value="first">Elon Musk</option>
              <option value="second">Bill Gates</option>
            </Select>
          </FormLayout>
          <Div>
            {isReady ? (
              <Button
                size="xl"
                onClick={() => {
                  setCurrentPanel("snippet");
                  setIsReady(false);
                }}
              >
                Создать сбор
              </Button>
            ) : (
              <Button style={{ backgroundColor: "#B6CFEB" }} size="xl">
                Создать сбор
              </Button>
            )}
          </Div>
          <Div />
        </Group>
      </Panel>
      <Panel id="snippet" centered="true">
        <PanelHeader left={<Icon28CancelOutline onClick={()=> {setCurrentPanel("create")}} />}>Сниппет</PanelHeader>
        <Group>
          <Card>
              //TODO snippet
          </Card>
        </Group>
      </Panel>
    </View>
  );
}

export default App;
