import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from '../../layout/MetaData'
import SideBar from "./SideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { getAdminPatents, clearErrors } from '../../../actions/patentActions'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from "../../../actions/userActions";
import "../css/StyleDashBoard.css"

const Dashboard = () => {
    const dispatch = useDispatch();
    const { patents } = useSelector(state => state.patents)
    const { users } = useSelector(state => state.allUsers)

    useEffect(() => {
        dispatch(getAdminPatents())
        dispatch(allUsers())
    }, [dispatch])



    return (
        <Fragment>
            <MetaData title={"Admin dashboard"} />
            <body className="hold-transition sidebar-mini layout-fixed">

                <SideBar />
                <div className="GeneralDash">
                    <div className="TitleDash">
                        <h1>Panel Administrativo</h1>
                    </div>
                    <section className="SectionDash">
                        <div className="container-fluid">
                            <div className="CardDash">
                                <div className="">
                                    <h3>{patents && patents.length}</h3>
                                    <p>Patentes</p>
                                </div>
                                <a href="/admin/patents" className="">Más información <FontAwesomeIcon icon={faCircleArrowRight} /></a>
                            </div>

                            <div className="CardDash">
                                <div className="">
                                    <h3>{users && users.length}</h3>
                                    <p>Usuarios registrados</p>
                                </div>
                                <a href="/admin/users">Más información <FontAwesomeIcon icon={faCircleArrowRight} /></a>
                            </div>
                            {/* <div className="CardDash">
                                            <div className="">
                                                <h3>65</h3>
                                                <p>Unique Visitors</p>
                                            </div>
                                            <a href="#">More info <FontAwesomeIcon icon={faCircleArrowRight} /></a>
                                    </div> */}
                        </div>
                    </section>
                </div>
            </body>
        </Fragment>

    )
}

export default Dashboard