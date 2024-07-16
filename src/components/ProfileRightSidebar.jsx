import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Button, Container } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOtherUsersAction } from "../redux/actions/getOtherUsersAction";
import { useSelector } from "react-redux";

const ProfileRightSidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOtherUsersAction());
  }, [dispatch]);

  const users = useSelector((state) => state.otherUsers.list);

  console.log(users);

  return (
    <>
      <Container className="border border-secondary rounded-2 mt-2 bg-white">
        <div className="d-flex justify-content-between border-bottom mt-2 ">
          <div>
            <h4>Lingua del profilo</h4>
            <p className="text-secondary">Italiano</p>
          </div>
          <div>
            <Pencil />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <h4>Profilo pubblico e URL</h4>
            <p className="text-secondary">www.linkedin.com...</p>
          </div>
          <div>
            <Pencil />
          </div>
        </div>
      </Container>
      {/* inserzione pubblicità */}
      <Container className="border border-secondary rounded-2 mt-2 px-0">
        <div className="right-side-profile">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="hiring on LinkedIn"
          />
        </div>
      </Container>
      {/* ALTRI UTENTI */}
      <Container className="border border-secondary rounded-2 mt-2 mb-2 bg-white">
        <div>
          <h4>Altri profili simili</h4>
        </div>
        {/* utente 1 */}
        <div className="d-flex 2 border-bottom mt-2">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              width={45}
            />
          </div>
          <div>
            <div className="ms-2 mb-2">
              <a href="#">Utente 1</a>
              <span> &middot; 2&deg;</span>
              <p>Competenze/Attività</p>
              <Button variant="outline-dark" className="rounded-pill">
                <Plus />
                <strong>Segui</strong>
              </Button>
            </div>
          </div>
        </div>
        {/* utente 2 */}
        <div className="d-flex 2 border-bottom mt-2">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              width={45}
            />
          </div>
          <div>
            <div className="ms-2 mb-2">
              <a href="#">Utente 1</a>
              <span> &middot; 2&deg;</span>
              <p>Competenze/Attività</p>
              <Button variant="outline-dark" className="rounded-pill">
                <Plus />
                <strong>Segui</strong>
              </Button>
            </div>
          </div>
        </div>
        {/* utente 3 */}
        <div className="d-flex 2 border-bottom mt-2">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              width={45}
            />
          </div>
          <div>
            <div className="ms-2 mb-2">
              <a href="#">Utente 1</a>
              <span> &middot; 2&deg;</span>
              <p>Competenze/Attività</p>
              <Button variant="outline-dark" className="rounded-pill">
                <Plus />
                <strong>Segui</strong>
              </Button>
            </div>
          </div>
        </div>
        {/* utente 4 */}
        <div className="d-flex 2 border-bottom mt-2">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              width={45}
            />
          </div>
          <div>
            <div className="ms-2 mb-2">
              <a href="#">Utente 1</a>
              <span> &middot; 2&deg;</span>
              <p>Competenze/Attività</p>
              <Button variant="outline-dark" className="rounded-pill">
                <Plus />
                <strong>Segui</strong>
              </Button>
            </div>
          </div>
        </div>
        {/* utente 5 */}
        <div className="d-flex 2 border-bottom mt-2">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEX///8AAAD8/PwFBQX6+voREREICAjg4ODd3d329vbw8PCioqKfn59dXV0XFxfq6upXV1d/f3+KioowMDC0tLRISEhoaGjKyspvb29NTU05OTlAQECurq5gYGDDw8OXl5ciIiIrKyvU1NQ1NTUjIyOOjo5ubm56enq8vLyxsbG9BGI1AAAKtElEQVR4nO1da3uyPAxWEDwj4hmdim7q/v8ffKfu2ZLSQpIW2HW93p/pITRpDk3TVuuFF1544YUXXnihBF73Npou420WRUHYbodBdMy28XI6unW9pudGxWSexJnfNsLP4mQ+aXqWJTgdxkczCRDH8eHU9GwNGOzeIhoRP8Qsd4OmZ61iMFoUcJMZ/mL0h2jp7DYiKp4IN7tO0xQ80FszOSqP6NprmorWbWFLxROLW5NUdEaZGzLumA2b4jBvRNxqqTiOmlCW3vDdLRl3ZMPa6djP3JNxx3lfKxnduGxCfrZYJsP5qjcZ9D2vP5j0VvNhsly8l27Ucbc2MrwkLJpJmK6HJ6Pgdk7DdVrc/qMmUTkVcJW/TVaEzaezT7YFS3OuwwzzrsYZBG+ffXpHX7ZZYPwf08oXpXc2McR4ztYDnfnYxGRpxbp+ZBj4fBDafoODgVGDkduZI/THekaIVza9rmI9s74x+JSHnvbnhWvr/bJ70S70uaKN+KaTzXDtxGudXHSrElRiSY50Q705+2ndNx3TViAoV804WyvZULFKNUNMXY7wBU8j5pFzC2+oYd43pxqls8mPMK7A2Z5o/lfs0E3p593AaO6ue4h53m/eONuG+9t855VF2Cb5xd86oqSTW4/w4KZnPQ657XHjhLu83C86Ot2s8ljl2Ct2IfE5+dtWHrid5Hj5zb7TnP5Y1uD2dHLa0VqfjNQeExcTLcdUHddSad0UwfNrC3OoFpFvZXf1FFXr71zNsxw7hZLAwqzrK3Z7WJEW1GOu2PZn+SasbFh+rXR8UaKsiXjrUgS9Tr56QuUuoYD2Qifd2ED5lYEoIuEp8ZKa9l0MZRdOJTpM0YRL55MkQdGMAr14wvy5Felzr3c7JNf1+pocbj1RDx1srfjsGKTCWEe+fdW/XXGMN0yvN/4OOsEW5Jn7OxLUPOTau9481kZ4wvGcO5MVZo0PXusungbT/xgkBWdZx4TpI3/gX8FT8Pj8Y8Nq258ag9NPBFOey4cdojGn6R41jVgCMiScVvMCMIqYMNjcwzYWxzLpEo+rFxwOmaOmZ3rDoXgtdyVc9Yvgk9Et5nSyqeSh89qILpueLhxpBOMwZ4L+T0ZtiC0cOjt3So9IMcZ0rSKaUgftnVvyYJowXgkW9N0LxYXfaUuCqSfvEfnwF4ES8pqsUDvakmSwCdmZ8Zh89QQ9YIWcvBmlxQ22oOvRtYSOdvtK7b+LLBVKJAJxyIU6zk5GB2MvXcJWi/Lve/D7kKrTVW+SDnJwZIKGKPcVEYusiYN4usMmIsiezgW2KmXJDrRrfOrfOsjpoJvWiFeiMvIRr8fEISZkw0SHgMq/aF8sky1kMlN1yLJtBSoDI11S4loM4CZHNTO7Fsmyd5A5GBrlYbEJiLQ6lXktF4S+JEgUi7U7VCIlNP9gIN56rUYq5C3EWVQ/5EOdFx/UtYd2il9kcaI9i+oYOkjTpErjJ2xU5JnBuF5AtExP9nRQFPUDHbjPF8U+oTak2r2JOikJqNEq+KeP5s/Qz6X61PlsAgEIRuADiPfN4VO4vRXKEkDHUok8ERL5GO1G5hwouClQXdyVOicZqEYEXH8z80NnnXocYmUv/oK6AUOJfDd9NIE9U3PUL20noHpwKAZqsjZhQI/KtC1HF2Go4eU+FBKTpoPLlhI7bmVuCCGFE+6ALpyJ/aG9T7XjWtYXrJ6IqONBD9ZkRGXgG3J80dpifCKkjgftc8MyepD9yGd1buho+9Tx4HYf6v3dLuyXHAJ0REibOh6Sdr1HBiNzGbXflhPFzmCtFjwq0OsIyH1U26fVsoo7/IIs7Gi/10syzDKgpwc4uvtGZwHoWOvzB+AX9HwNJ8YvhwWgttP/b6hG6Kc7utx8AegsACVAH3iD/5Z+/unEr+LkAUBDSm+iZ+AL+hEwPnEVg56xCBWJXiNCY4OeGDVwQwj9xBWGgI+lhDBSBDIXdJBtRuxs6DdtqBEY6SLCoyoM8sEVZoFA+wU0/xjJIjd1UhIwrhr3QTO9PQA7ZuQieQ4M+dLTDjgeaKc3NYWEuOAtBmcRCBGylotQIyd7tJy1hMLuwG1n5YOVC7tw+1WzuwRgVRUo335hVIuXKWxpONINxjvKFWIGvuAlY1pGG3kpsHD99XpUZjQ+YHX4xkyNLjcaZWb8AwMLXcJIbHug3IyXOVZPWNjA3Js65Y6szNX9hjgETI4E/kO5qysLPnyjI8xG2bKTzKEo6yUAWn/GiL0RE1EhoXd+zj0cR6+AZAG6H/QEAh/xb7ZAC8UQoEMhU8Et1hObkkhQyAWFTA3fZOAbSY2CE5O7jpKbRoQgtuxYAWJiqv6iRSq680s5VhAd9CD0GSp+KbtWSDnoER29KaAmxwfCu4AoGG/SpaLD0FwnpPzfsfQqOekwVHQ8rRmrVFJSeVkzaH6YlZ0kYUCHz0I1n9rclIU9mxMGUAqHVbWQ1dIgK8HSqs4CMYUDhREsb+Z25pdMpSJbC+7vIaCkmgI1JElzKsDk9nHZpNnxPUs3l4+bg4owkPmPBd9BNUBNPKsTfWrimSgVsEag+RUllImSM2sE1FFhYRBRki5bH+jpsrIE5tqAEnOL4yOItxinL/UgY/CLKMm/JiA7qyxeLLp2URPQTy5LgsUXYZovVQ3AuwiDSz2Q74rVAeS0lR8NyS6L1QB8S4XAK+jYpqHaGzpwr+/hU1ryZRsF3f0wWceLNIuC8P7aRRhEWbqI18lwL+yxx75Qia9RsO2U7m4aZ8UVlmfx9JNNDvKgaRoOX8tn6JL+bbqgX8xfJHvGkSs+3qOdeuBr4NS40KmwOLRhbbYJNdaI4gDEa+D8W/De/iI+6TmuKZEIWa0AXCqh9L7jyfaViGhdti7CUgmc4hV9UyloHs6HQnkRFq9QOLLAVeytHSWZfi18QSFnfMecE82lFXg5GYpZC+GPDepauQrMsskJJXd6otoIxYi1pOAUEZ5mU4og5VMn9UWsreGv8/6SUgSJaf7h1r6yRXoHZ7KhIlAd7L1VWSq1UBgWk5NFQYFypGgzViog8avQqaXbfsN13rQSrvqFn/zOVjn25pduyxXk+5GxrqMk8iJsf7ZiZUeRFJlVC1J896Etg+8c0bedrlRVEpU3zFVkfUTxk4rZ6h/8h1ArlxyldVnzJUA962ICdFxUU8midqdyE8HfVaADzYjVUqZyv7vPOjevGqnFOUe3FsmmIbJ6j0ItJd0cQssHrnLFvZuCdZHeXLnwZuDg+Q5Hl6js4CJQKKvJ5hZOniQQVclzi42jxwM0z3bUCnrtwFJKGl0TN492PMGtiekSbuTjH7zG9i7nj2s0pE9cP//0hWED1ko1j2vU4xtCRBU9INqt2apPK3s9NP/iTJUQ5tPSoHvErBoEFb9J0as0NveL6tjqHyoPz91Rw+OnXzhVLvOpIJ4ogffhqM6OHuGhvre0u/pXUJ1AnG0uQ3neuAxp/Tliu8w9GVnt7xnd4fyF9vdhEw/NP0lx+Er7rDEyHrg5ch4XlTyhy0Lval30Ibr+jZxDb7exUCzh5rNRnsIYDDciyyXcDP9cvnf/c8m9h7jkPExfK06jN+KW/P42+htyYcZknoxnBXwWzsbJ7Q9lrxbD6+6H02W8nR2jIPT9MIiOs228nIpzM1944YUXXnjhhf8V/gOvNZXdvim6sQAAAABJRU5ErkJggg=="
              alt=""
              width={45}
            />
          </div>
          <div>
            <div className="ms-2 mb-2">
              <a href="#">Utente 1</a>
              <span> &middot; 2&deg;</span>
              <p>Competenze/Attività</p>
              <Button variant="outline-dark" className="rounded-pill">
                <Plus />
                <strong>Segui</strong>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center pt-2">Mostra tutto</p>
        </div>
      </Container>
      {/* inserzione pubblicità */}
      <Container className="border border-secondary rounded-2 mt-2 px-0">
        <div className="right-side-profile">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="hiring on LinkedIn"
          />
        </div>
      </Container>
    </>
  );
};
export default ProfileRightSidebar;
