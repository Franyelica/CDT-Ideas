import React, { Fragment, useState, useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { updatePatent, getPatentDetails, clearErrors } from '../../../actions/patentActions'
import MetaData from '../../layout/MetaData'
import { Navigate, useNavigate } from "react-router-dom";
import { UPDATE_PATENT_RESET } from "../../../constants/patentConstants";
import { useParams } from 'react-router-dom';
import "../css/StyleNewPatents.css"


const UpdatePatent = () => {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [category, setCategory] = useState('');
    const [Headlines, setHeadlines] = useState([]);
    const [Filing, setFiling] = useState('');
    const [Country, setCountry] = useState('');
    const [inventors, setInventors] = useState([]);
    const [pct, setPct] = useState('');
    const [nationalstage, setNationalstage] = useState('');
    const [projectcode, setProjectcode] = useState('');
    const [yearoffiling, setYearoffiling] = useState('');
    const [facult, setFacult] = useState('');

    const categories = [
        'Seleccione una categoría',
        'Patente de invención',
        'Patente de modelo de utilidad'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, patent } = useSelector(state => state.patentDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.patent)

    const patentId = id;

    useEffect(() => {

        if (patent && patent._id !== patentId) {
            dispatch(getPatentDetails(patentId))
        } else {
            setName(patent.name);
            setDescription(patent.description);
            setOldImages(patent.images);
            setCategory(patent.category);
            setHeadlines(patent.Headlines);
            setFiling(patent.Filing);
            setCountry(patent.Country);
            setInventors(patent.inventors);
            setPct(patent.pct);
            setNationalstage(patent.nationalstage);
            setProjectcode(patent.projectcode);
            setYearoffiling(patent.yearoffiling);
            setFacult(patent.facult);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            navigate('/admin/patents')
            alert.success('Patente actualizada correctamente.')
            dispatch({ type: UPDATE_PATENT_RESET })
        }

    }, [dispatch, alert, error, isUpdated, navigate, updateError, patent, patentId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('Filing', Filing);
        formData.set('Country', Country);
        formData.set('Headlines', Headlines);
        formData.set('inventors', inventors);
        formData.set('pct', pct);
        formData.set('nationalstage', nationalstage);
        formData.set('projectcode', projectcode);
        formData.set('yearoffiling', yearoffiling);
        formData.set('facult', facult);

        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(updatePatent(patent._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }
    return (
        <Fragment>
            <MetaData title={"Actualizar patente"} />
            <SideBar />
            <body>
                <div className="Hello">
                    <h1 >Actualizar patente</h1><br />
                    <div className="Route">
                        <ol>
                            <li><a href="/admin/dashboard">Inicio /</a></li>
                            <li>Actualizar patente</li>
                        </ol>
                    </div>
                </div>
                <Fragment>
                    <div className="displayForm">
                        <form onSubmit={submitHandler} encType='multipart/form-data' className="FormG">
                            <div className="ContainerForm">
                                <div className="inputP">
                                    <label>Nombre de la patente:</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="inputP">
                                    <label>Descripción:</label>
                                    <textarea
                                        type="text"
                                        id='description_field'
                                        className="Patente"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        aria-label="With textarea"
                                    />

                                </div>

                                <div className="inputP">
                                    <label>Categoría:</label>
                                    <select className="custom-select" id="category_field" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}

                                    </select>

                                </div>

                            </div> <br />
                            {/*  */}
                            <div className="ContainerForm">
                                <div className="inputP">
                                    <label>Inventores</label>
                                    <input
                                        type="text"
                                        id='description_field'
                                        className="Patente"
                                        value={inventors}
                                        onChange={(e) => setInventors(e.target.value)}
                                        aria-label="With textarea"
                                    />

                                </div>
                                <div className="inputP">
                                    <label>Número de radicado</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={Filing}
                                        onChange={(e) => setFiling(e.target.value)} />
                                </div>
                                <div className="inputP">
                                    <label>País</label>
                                    <select
                                        name=""
                                        id="name_field"
                                        value={Country}
                                        className="Patente"
                                        onChange={(e) => setCountry(e.target.value)} >
                                        <option value="Colombia">Colombia</option>

                                    </select>
                                    {/* <input
                                            type="text"
                                            id='name_field'
                                            className="Patente"
                                            value={Country}
                                            onChange={(e) => setCountry(e.target.value)} /> */}
                                </div>
                            </div><br />
                            {/*  */}
                            <div className="ContainerForm">
                                <div className="inputP">
                                    <label>Titulares</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={Headlines}
                                        onChange={(e) => setHeadlines(e.target.value)} />
                                </div>
                                <div className="inputP">
                                    <label>PCT</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={pct}
                                        onChange={(e) => setPct(e.target.value)} />
                                </div>
                                <div className="inputP">
                                    <label>Fase nacional</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={nationalstage}
                                        onChange={(e) => setNationalstage(e.target.value)} />
                                </div>
                            </div><br />
                            {/*  */}
                            <div className="ContainerForm">
                                <div className="inputP">
                                    <label>Código del proyecto</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={projectcode}
                                        onChange={(e) => setProjectcode(e.target.value)} />
                                </div>
                                <div className="inputP">
                                    <label>Año de radicación</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={yearoffiling}
                                        onChange={(e) => setYearoffiling(e.target.value)} />
                                </div>
                                <div className="inputP">
                                    <label>Facultad</label>
                                    <input
                                        type="text"
                                        id='name_field'
                                        className="Patente"
                                        value={facult}
                                        onChange={(e) => setFacult(e.target.value)} />
                                </div>
                            </div><br />
                            {/*  */}
                            <div className="ContainerForm">
                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='inputP'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='form-control'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                            accept="images/*"
                                        />

                                    </div>

                                    {oldImages && oldImages.map(img => (
                                        <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2 d-inline" width="120" height="120" />
                                    ))}

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2 d-inline" width="120" height="120" />
                                    ))}

                                </div>

                            </div><br />
                            {/*  */}


                            <button type='submit' disabled={loading ? true : false} className="BtnCretePatent">
                                Actualizar patente
                            </button>

                        </form>
                    </div>


                </Fragment>
            </body>
        </Fragment>
    )

}

export default UpdatePatent