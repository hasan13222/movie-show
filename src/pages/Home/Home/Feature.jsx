import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShowContext } from "../../../Providers/ShowProvider";

const Feature = () => {
    const {shows} = useContext(ShowContext);
    const navigate = useNavigate();

  const showMoreHandler = (item) => {
    navigate(`/show/${item.show.id}`);
  };
  return (
    <>
      <div id="feature" className="container-fluid feature">
        <div className="container feature__cont">
          <h2 className="text-center">Featured Shows</h2>
          <div className="show__items row">
            {shows?.map((show, index) => {
              if (index < 8) {
                return (
                  <Fragment key={show?.show?.id}>
                    <div className="item col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                      <div className="img_wrapper">
                        {show?.show?.image ? (
                          <img
                            src={show?.show?.image?.medium}
                            alt="movie poster"
                          />
                        ) : (
                          <img src="/images.png" alt="movie poster" />
                        )}
                      </div>

                      <h3>{show?.show?.name}</h3>
                      <p>Language: {show?.show?.language}</p>
                      <p>
                        Genre:{" "}
                        {show?.show?.genres?.map((item, i, arr) => (
                          <Fragment key={`genres${i}`}>
                            {item}
                            {i < arr.length - 1 ? ", " : ""}
                          </Fragment>
                        ))}
                      </p>
                      <button
                        onClick={() => showMoreHandler(show)}
                        className="btn btn-primary"
                      >
                        See More
                      </button>
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
