import { useState } from "react";
import styles from "../css/dropDown.module.css";
import Title from "../data/dropDown.json";
export const Dropdown = () => {
  let data = Title.Title;
  const [sublist, setsublist] = useState([]);
  return (
    <div className={styles.mainDiv}>
      {data.map((el, i) => {
        return (
          
            <div  key={i} className={styles.optionDiv}>
              <p
                 onMouseOver={() => setsublist(el.list[0].sublist)}
                 onMouseOut={() => setsublist([])}
              >
                {el.title}
              </p>
              <div className={styles.mainHovar}>
                <div>
                  <div>
                    {el.list.map((el, i) => {
                      return (
                        
                          <div key ={i}
                            onMouseOver={() => setsublist(el.sublist)}
                            onBlur={() => setsublist([])}
                            className={styles.listDiv}
                          >
                            <p>{el.listTitle}</p>
                            {el.sublist.length > 1 ? (
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
                                alt=""
                              />
                            ) : (
                              ""
                            )}
                          </div>
                      );
                    })}
                  </div>
                  <div className={styles.sublist}>
                    {sublist.map((el, i) => {
                      return <p key={i}>{el}</p>;
                    })}
                  </div>
                </div>
                <div className={styles.staticDiv}>
                  {el.staticData.map((el, i) => {
                    return <p key={i}>{el}</p>;
                  })}
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};
