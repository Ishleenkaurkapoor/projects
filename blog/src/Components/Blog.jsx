import { useState } from "react";
import { Card, Row, Col, Pagination } from "react-bootstrap";

function Blog({ blogs }) {
  let [page, setPage] = useState(1);
  let pages = blogs.length / 5 + (blogs.length % 5 !== 0 ? 1 : 0);

  let ItemsToRender=blogs.slice((page-1)*5,Math.min(page*5,blogs.length));

  return (
    <>
      <Row
        xs={2}
        md={1}
        style={{ marginLeft: "0px", marginRight: "0px" }}
        className="g-4"
      >
        {ItemsToRender.map((_, idx) => (
          <Col xs={12}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis eos atque odio! Quasi maiores nam consectetur tenetur
                  odio nihil voluptatem dicta modi. Voluptatibus fuga
                  repellendus similique perspiciatis nemo sed
                  corporis!gfghjfjhfdhgirheiuethef dsfdsf sdffdfsgfffdsgg
                  dfdfdsfdfsfsdff Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Harum minima dignissimos iure nihil sint
                  magnam quam reiciendis magni pariatur sed ad, esse mollitia
                  aspernatur voluptatum voluptate. Odit delectus cum expedita
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit expedita saepe magnam dignissimos, natus laudantium
                  perferendis accusantium quod recusandae soluta sunt adipisci,
                  quisquam repellendus fugiat itaque eum impedit aut neque
                  tempore officiis? Sequi sunt asperiores alias odio error
                  libero, doloremque rerum a iure delectus, voluptas aliquam,
                  illo expedita id magnam facere ab nostrum fuga laboriosam
                  facilis! Consectetur ipsam, culpa eveniet velit, tempora animi
                  accusamus incidunt aut laborum exercitationem deleniti facilis
                  illo soluta placeat mollitia? Explicabo ullam sint vel eum
                  illum consectetur debitis quaerat dicta provident fuga!
                  Dignissimos, libero et harum magnam blanditiis expedita
                  labore? Commodi minima nobis eius nemo dolorum expedita
                  incidunt necessitatibus. Quidem ab praesentium sapiente
                  aspernatur labore id perferendis incidunt inventore expedita
                  qui, deserunt dolorum? Dolore illo, dicta cupiditate,
                  accusantium iste, ratione maxime expedita qui esse fuga
                  doloribus? Accusamus quos vel quo, sequi suscipit doloribus
                  corrupti ipsum tempora alias. Velit quis ad quisquam tempora
                  eligendi. Vel qui, fugiat quae modi sit aspernatur tenetur.
                  Magni fugiat error inventore officiis id, totam vitae ratione
                  tempore praesentium dolor non quidem illo minima explicabo
                  alias tempora laboriosam dolore rerum pariatur. Veniam facilis
                  pariatur in amet adipisci quis, excepturi repudiandae hic
                  dignissimos quasi corporis consectetur porro vero, molestiae
                  dolores nam beatae doloremque. Aliquam possimus molestias,
                  porro modi autem odio ratione similique doloremque corrupti
                  officiis provident. Amet nostrum quibusdam laudantium. Cumque,
                  repellendus. Nam, neque sed possimus optio mollitia adipisci
                  dolorum qui? Veniam autem, voluptas unde quod, ducimus,
                  eligendi libero corrupti ipsam cumque quam sed. Incidunt in
                  expedita inventore. Officia alias voluptate eaque quod
                  similique, beatae eos facilis quasi libero ducimus nulla,
                  labore unde temporibus ab tempore velit consequatur rem fuga
                  expedita nesciunt doloremque? Consequatur nemo porro esse
                  impedit quos, neque facere saepe iusto unde error magnam in
                  doloremque eaque quas, id fugiat! Voluptatibus incidunt magni,
                  fugit omnis, possimus labore aperiam nemo suscipit tenetur
                  veritatis sequi natus, fuga perspiciatis itaque explicabo
                  neque debitis quo repudiandae? Repellendus expedita provident
                  dolores numquam eaque dolorum voluptatibus facilis alias
                  laborum nisi cumque sed inventore ex quam quos, voluptatum
                  totam dignissimos sit cum obcaecati non ullam, aspernatur
                  adipisci tempora. Aspernatur est atque nemo illum iusto
                  repellat ipsa in eaque error, qui consectetur molestiae
                  voluptates dolor consequuntur incidunt, quo consequatur
                  repellendus aut eligendi neque dolorum. Iusto voluptas
                  perferendis quas, obcaecati exercitationem perspiciatis ut
                  numquam illum rem molestiae cum. Commodi similique dolorem,
                  tempora fugiat eligendi ut nesciunt aut consectetur aliquid
                  nihil ipsum itaque deserunt veritatis. Libero non nesciunt,
                  nulla odio perspiciatis excepturi accusantium doloremque
                  pariatur, nobis facere, cum reiciendis modi inventore tempora
                  voluptatum nostrum eaque ipsum facilis similique voluptates
                  eligendi nemo! Exercitationem dolorum pariatur rem beatae
                  eaque facere corporis et adipisci voluptatum sequi unde
                  deleniti ad, optio magnam repudiandae sint velit tempora
                  deserunt natus dolore doloremque sapiente illum. Facilis
                  impedit ratione veritatis beatae tempore nam fugit,
                  voluptatem, dolore deserunt reprehenderit saepe ullam aut
                  alias, nemo quam exercitationem error distinctio quas? Beatae,
                  omnis. Debitis aut numquam magnam ratione harum libero
                  molestias tenetur distinctio minima nobis quia vero itaque,
                  provident vel. Ducimus exercitationem a quia, itaque expedita
                  iste ex saepe aliquam consequuntur necessitatibus porro!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="pagination">
        <Pagination>
          {Array.from({ length: pages }).map((_, idx) => {
            return (
              <Pagination.Item
                onClick={() => {
                  setPage(idx + 1);  
                }}
                key={idx + 1}
                active={page === idx + 1}
              >
                {idx + 1}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </div>
    </>
  );
}

export default Blog;
