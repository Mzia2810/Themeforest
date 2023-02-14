// import React from 'react';
// import moment from "moment";
// import { useEffect, useState } from "react";
// import Editable from "react-bootstrap-editable";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   editFileNameValue,
//   editMetadata,
//   uploadOtherFile,
// } from "store/modules/file";
// import {
//   deleteOtherFile,
//   downloadOtherFiles,
//   favouriteFile,
//   followFile,
//   postComment,
//   unFavouriteFile,
//   unFollowFile,
// } from "store/modules/fileAction";
// import { loadValueList } from "store/modules/valueList";
// import styled from "styled-components";
// import { uploadOtherFiles } from "utils/formdata";
// // import { truncateString } from "utils/truncate";
// // import Test from "../../src/assets/images/share.png";
// // import Loader from "./loader";
// // import MemoModalFooter from "./MemoModalFooter";

// const DivForm = styled.div`
//   width: 100%;
//   height: 56vh;
//   // overflow-y: auto;
// `;

// const CheckButton = styled.button`
//   padding: 6px 4px;
// `;

// const RemoveButton = styled.button`
//   padding: 6px 6px;
// `;

// const ModalInnerDiv = styled.div`
//   width: 100%;
//   height: 47vh;
// `;

// export default function FileModal() {
//   const dispatch = useDispatch();
//   const [searchDropdown, setSearchDropdown] = useState(false);
//   const fileLoading = useSelector((state) => state.file?.loading);
//   const fileDetail = useSelector((state) => state.file?.fileDetail);
//   const [workflow_step_id, setWorkflow_step_id] = useState();
//   const [filePermission, setFilePermission] = useState({});
//   const [previewFileImage, setPreviewFileImage] = useState(null);
//   const valList = useSelector((state) => state.valueList?.valueList);
//   const fileToDownload = useSelector(
//     (state) => state.fileAction?.downloadedFile.data
//   );
//   const [metaOption, setMetaOption] = useState([]);
//   console.log({ fileDetail });

//   useEffect(() => {
//     let opts = {
//       id: "",
//       name: [],
//     };
//     const metaOptionId = metaOption?.find(
//       (x) => x.id === valList[0]?.value_list_id
//     );
//     if (!metaOptionId && valList?.length > 0) {
//       valList?.map((d) => {
//         opts.name.push(d?.name);
//       });
//       opts.id = valList[0]?.value_list_id;
//       setMetaOption([...metaOption, opts]);
//     }
//   }, [valList]);

//   useEffect(() => {
//     if (fileDetail?.file_details?.length > 0) {
//       fileDetail?.file_details?.map((file) => {
//         setWorkflow_step_id(file.workflow_step_id);
//       });
//     } else {
//       setWorkflow_step_id(null);
//     }
//     if (fileDetail?.file_permission?.length > 0) {
//       fileDetail?.file_permission?.map((file) => {
//         setFilePermission(file);
//       });
//     } else {
//       setFilePermission({});
//     }
//   }, [fileDetail]);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//     reValidateMode: "onChange",
//   });

//   const {
//     register: register2,
//     handleSubmit: handleSubmit2,
//     watch: watch2,
//     reset: reset2,
//     formState: { errors: errors2 },
//   } = useForm({
//     mode: "onChange",
//     reValidateMode: "onChange",
//   });

//   let fileValue = watch("file", "");

//   const showSearchDropdown = () => {
//     if (searchDropdown) {
//       setSearchDropdown(false);
//     } else {
//       setSearchDropdown(true);
//     }
//   };

//   const openFileExplorer = () => {
//     document.getElementById("fileLabelUploadModal").click();
//   };

//   const uploadFile = (data) => {
//     data.file_id = fileDetail.file_details[0]?.id;
//     data.file = data.file[0];
//     const formData = uploadOtherFiles(data);
//     dispatch(uploadOtherFile(formData, data.file_id));
//     // console.log({fileValue})
//     // fileValue = []
//     reset();
//   };

//   const uploadComment = (data) => {
//     data.file_id = fileDetail.file_details[0]?.id;
//     dispatch(postComment(data));
//     reset2();
//   };

//   const editMetadataFile = (file_id, user_field_id, value) => {
//     const editableData = {
//       file_id: file_id,
//       user_field_id: user_field_id,
//       value: value,
//     };
//     dispatch(editMetadata(editableData));
//   };

//   const metadataSelectOptions = (id) => {
//     dispatch(loadValueList(id));
//   };

//   const optionValue = (id) => {
//     const metaId = metaOption?.find((x) => x.id === id);
//     if (metaId) {
//       return metaId?.name;
//     }
//     return [];
//   };

//   const editFileName = (file_id, name) => {
//     const newFileName = {
//       file_id: file_id,
//       name: name,
//     };
//     dispatch(editFileNameValue(newFileName));
//   };

//   const openPreviewTab = (path) => {
//     setPreviewFileImage(path);
//     document.getElementById("previewtab").click();
//   };

//   const deleteFile = (id, file_id) => {
//     const data = { id: id };
//     dispatch(deleteOtherFile(data, file_id));
//   };

//   const downloadFile = (id) => {
//     dispatch(downloadOtherFiles(id));
//   };

//   const favourite = (file_id) => {
//     const data = { file_id };
//     dispatch(favouriteFile(data));
//   };

//   const unFavouriteHandler = (file_id) => {
//     const data = { file_id };
//     dispatch(unFavouriteFile(data));
//   };

//   const follow = (file_id) => {
//     const data = { file_id };
//     dispatch(followFile(data));
//   };

//   const unfollow = (file_id) => {
//     const data = { file_id };
//     dispatch(unFollowFile(data));
//   };

//   return (
//     <div
//       className="modal fade bs-example-modal-center"
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby="mySmallModalLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog modal-lg modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-body mb-n4">
//             <button
//               type="button"
//               id="file-modal-view"
//               className="btn-close d-none"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             />
//             {!fileLoading &&
//               fileDetail &&
//               fileDetail?.file_details?.map((file) => (
//                 <div
//                   className="d-flex justify-content-between px-3 pt-3"
//                   key={file?.id}
//                 >
//                   <div className=" align-self-center">
//                     {/* <h4>{truncateString(file?.name, 15)}</h4> */}
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className="d-flex mt-n5">
//                       <button
//                         className={`btn btn-sm ${
//                           fileDetail?.favourite === "0"
//                             ? "btn-outline-warning"
//                             : "btn-warning"
//                         } me-3`}
//                         onClick={() =>
//                           fileDetail?.favourite === "0"
//                             ? favourite(file?.id)
//                             : unFavouriteHandler(file?.id)
//                         }
//                       >
//                         {fileDetail?.favourite === "0"
//                           ? "Favorite"
//                           : "Unfavorite"}
//                       </button>
//                       <button
//                         className={`btn btn-sm ${
//                           fileDetail?.file_permission[0]?.is_following === 0
//                             ? "btn-outline-success"
//                             : "btn-success "
//                         } me-3`}
//                         onClick={() =>
//                           fileDetail?.file_permission[0]?.is_following === 0
//                             ? follow(file?.id)
//                             : unfollow(file?.id)
//                         }
//                       >
//                         {fileDetail?.file_permission[0]?.is_following === 0
//                           ? "Follow"
//                           : "Unfollow"}
//                       </button>
//                     </div>
//                     <div>
//                       <div className="form-group mt-n2 d-flex justify-content-end">
//                         <small className="me-1">
//                           {" "}
//                           <small className="fw-bolder">
//                             Last Modified by:{" "}
//                           </small>
//                           --
//                         </small>
//                         <small>
//                           {" "}
//                           <small className="fw-bolder">
//                             Last Modified at:{" "}
//                           </small>
//                           {moment(file?.last_modified).fromNow()}
//                         </small>
//                       </div>
//                       <div className="form-group mt-2 d-flex justify-content-end">
//                         <small className="me-1">
//                           <small className="fw-bolder">Created By: </small>
//                           {file?.first_name} {file?.last_name}
//                         </small>
//                         <small>
//                           <small className="fw-bolder">Created At: </small>
//                           {moment(file?.created_at).format("L H:s")}
//                         </small>
//                       </div>
//                       <div className="form-group mt-2 d-flex justify-content-end">
//                         <small className="me-1">
//                           <small className="fw-bolder">Checked out by: </small>
//                           --
//                         </small>
//                         <small>
//                           {" "}
//                           <small className="fw-bolder">
//                             Document Version:{" "}
//                           </small>
//                           {file?.current_version}
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             <ul className="nav nav-tabs mx-3" role="tablist">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   data-bs-toggle="tab"
//                   href="#metadata"
//                   role="tab"
//                 >
//                   <span className="d-block">Metadata</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   data-bs-toggle="tab"
//                   href="#relatedfiles"
//                   role="tab"
//                 >
//                   <span className="d-block">Related Files</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   data-bs-toggle="tab"
//                   href="#preview"
//                   role="tab"
//                   id="previewtab"
//                 >
//                   <span className="d-block">Preview</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   data-bs-toggle="tab"
//                   href="#comments"
//                   role="tab"
//                 >
//                   <span className="d-block">Comments</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   data-bs-toggle="tab"
//                   href="#activities"
//                   role="tab"
//                 >
//                   <span className="d-block">Activities</span>
//                 </a>
//               </li>
//             </ul>

//             <div className="tab-content">
//               <div
//                 className="tab-pane active p-3"
//                 id="metadata"
//                 role="tabpanel"
//               >
//                 <DivForm className="border border-secondary px-4 py-4 overflow-auto">
//                   {fileLoading ? (
//                     <div className="position-absolute top-50 start-50">
//                       {/* <Loader />{" "} */}
//                     </div>
//                   ) : (
//                     <>
//                       <div>
//                         <div className="row mb-3">
//                           <label
//                             htmlFor="example-text-input"
//                             className="col-sm-4"
//                           >
//                             Category
//                           </label>
//                           <div className="col-sm-8">
//                             <Editable
//                               ajax={null}
//                               alwaysEditing={false}
//                               // className={null}
//                               disabled={false}
//                               editText={fileDetail?.category}
//                               renderConfirmElement={
//                                 <button className="btn btn-success btn-sm ml-auto mx-1 mdi mdi-check-bold"></button>
//                               }
//                               id={null}
//                               isValueClickable={true}
//                               label={null}
//                               mode="inline"
//                               // onSubmit={(value) =>
//                               //   editFileName(file?.id, value)
//                               // }
//                               initialValue={fileDetail?.category || null}
//                               onValidated={null}
//                               placement="top"
//                               showText
//                               type={"select"}
//                               validate={null}
//                               options={["none", "yet"]}
//                             />
//                           </div>
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {fileDetail &&
//                         fileDetail?.file_details?.map((file) => {
//                           return (
//                             <div key={file.id}>
//                               <div className="row mb-3">
//                                 <label
//                                   htmlFor="example-text-input"
//                                   className="col-sm-4"
//                                 >
//                                   File name
//                                 </label>
//                                 <div className="col-sm-8">
//                                   <Editable
//                                     ajax={null}
//                                     alwaysEditing={false}
//                                     // className={null}
//                                     disabled={false}
//                                     editText={file?.name}
//                                     renderConfirmElement={
//                                       <button className="btn btn-success btn-sm ml-auto mx-1 mdi mdi-check-bold"></button>
//                                     }
//                                     id={null}
//                                     isValueClickable={true}
//                                     label={null}
//                                     mode="inline"
//                                     onSubmit={(value) =>
//                                       editFileName(file?.id, value)
//                                     }
//                                     initialValue={file?.name || null}
//                                     onValidated={null}
//                                     placement="top"
//                                     showText
//                                     type={"textfield"}
//                                     validate={null}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         })}
//                       {fileDetail && fileDetail?.metadata?.length > 0 ? (
//                         fileDetail?.metadata?.map((file) => (
//                           <div className="" key={file.id}>
//                             <div className="row mb-3">
//                               <label
//                                 htmlFor="example-text-input"
//                                 className="col-sm-4"
//                               >
//                                 {/* {truncateString(file?.name, 22)} */}
//                               </label>
//                               <div
//                                 className="col-sm-8"
//                                 onClick={() =>
//                                   metadataSelectOptions(file?.value_list_id)
//                                 }
//                               >
//                                 <Editable
//                                   ajax={null}
//                                   alwaysEditing={false}
//                                   disabled={false}
//                                   editText={
//                                     file?.pivot?.value
//                                       ? file?.pivot?.value
//                                       : "Empty"
//                                   }
//                                   renderConfirmElement={
//                                     <button className="btn btn-success btn-sm ml-auto mx-1 mdi mdi-check-bold"></button>
//                                   }
//                                   id={null}
//                                   isValueClickable={
//                                     file?.pivot?.value ? true : false
//                                   }
//                                   label={null}
//                                   mode="inline"
//                                   onSubmit={(value) =>
//                                     editMetadataFile(
//                                       file?.pivot?.file_id,
//                                       file?.pivot?.user_field_id,
//                                       value
//                                     )
//                                   }
//                                   initialValue={file?.pivot?.value || null}
//                                   onValidated={null}
//                                   placement="top"
//                                   showText
//                                   type={
//                                     file?.type === "Text"
//                                       ? "textfield"
//                                       : file.type === "Dropdown"
//                                       ? "select"
//                                       : file.type === "Date"
//                                       ? "date"
//                                       : "textarea"
//                                   }
//                                   validate={null}
//                                   options={
//                                     optionValue(file?.value_list_id).length > 0
//                                       ? optionValue(file?.value_list_id)
//                                       : ["Loading..."]
//                                   }
//                                 />
//                               </div>
//                             </div>
//                             {/* end row */}
//                           </div>
//                         ))
//                       ) : (
//                         <div className="position-absolute top-50 text-center end-0 start-0">
//                           No data found
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </DivForm>
//               </div>

//               <div className="tab-pane p-3" id="relatedfiles" role="tabpanel">
//                 <DivForm className="border border-secondary p-2">
//                   <ModalInnerDiv
//                     style={{ width: "100%", height: "47vh" }}
//                     className="border border-secondary p-2 overflow-auto"
//                   >
//                     <div className="table-responsive">
//                       <table className="table table-sm table-striped">
//                         <thead>
//                           <tr>
//                             <th className="text-start" style={{ width: "69%" }}>
//                               {" "}
//                               Name
//                             </th>
//                             <th>Uploaded By</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         {fileLoading ? (
//                           <div className="position-absolute top-50 start-50">
//                             {/* <Loader />{" "} */}
//                           </div>
//                         ) : (
//                           <>
//                             <tbody>
//                               {fileDetail &&
//                               fileDetail?.related_files?.length > 0 ? (
//                                 fileDetail?.related_files?.map((file) => (
//                                   <tr key={file?.id}>
//                                     <td>{file?.name} </td>
//                                     <td>
//                                       {" "}
//                                       {file.first_name} {file.last_name}
//                                     </td>
//                                     <td>
//                                       <div className="btn-group">
//                                         <button
//                                           className="btn btn-primary btn-sm"
//                                           type="button"
//                                           onClick={() =>
//                                             openPreviewTab(file?.file_path)
//                                           }
//                                         >
//                                           View
//                                         </button>
//                                         <button
//                                           type="button"
//                                           class="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target={`#related${file?.id}`}
//                                           onClick={() => showSearchDropdown()}
//                                           aria-haspopup="true"
//                                           aria-expanded="false"
//                                         >
//                                           <i class="mdi mdi-chevron-down"></i>
//                                         </button>
//                                         <div
//                                           className=" card position-absolute collapse top-100"
//                                           style={{
//                                             zIndex: "300",
//                                           }}
//                                           id={`related${file?.id}`}
//                                         >
//                                           <a
//                                             className="dropdown-item ps-2 bg-success text-white"
//                                             // href={fileToDownload}
//                                             href="#"
//                                             onClick={() =>
//                                               downloadFile(file?.id)
//                                             }
//                                             style={{
//                                               borderRadius: "3px",
//                                               height: "30px",
//                                             }}
//                                             download
//                                           >
//                                             Download
//                                           </a>
//                                           <a
//                                             className="dropdown-item bg-danger text-light ps-2"
//                                             href="#"
//                                             onClick={() =>
//                                               deleteFile(
//                                                 file?.id,
//                                                 file?.file_id
//                                               )
//                                             }
//                                             style={{
//                                               borderRadius: "3px",
//                                               height: "30px",
//                                             }}
//                                           >
//                                             Delete
//                                           </a>
//                                         </div>
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 ))
//                               ) : (
//                                 <div className="position-absolute top-50 text-center end-0 start-0">
//                                   No data found
//                                 </div>
//                               )}
//                             </tbody>
//                           </>
//                         )}
//                       </table>
//                     </div>
//                   </ModalInnerDiv>
//                   <div className="d-flex justify-content-between align-items-center pt-3">
//                     <form onSubmit={handleSubmit(uploadFile)}>
//                       <div className="d-flex justify-content-between">
//                         <label htmlFor="file" id="fileLabelUploadModal"></label>
//                         <input
//                           id="file"
//                           name="file"
//                           type="file"
//                           className="d-none"
//                           {...register("file", {
//                             required: "Please choose a file.",
//                           })}
//                         />
//                         <input
//                           className="form-control"
//                           readOnly
//                           type="text"
//                           value={
//                             fileValue && fileValue.length > 0
//                               ? fileValue[0]?.name
//                               : ""
//                           }
//                           onClick={() => openFileExplorer()}
//                         />
//                         <button
//                           type="submit"
//                           className="btn btn-primary waves-effect ms-3"
//                           disabled={fileLoading ? true : false}
//                         >
//                           <span className="me-4">
//                             {fileLoading ? "Uploading..." : "Upload"}
//                           </span>
//                         </button>
//                       </div>
//                     </form>
//                     <div className="pt-3">{/* <Pagination /> */}</div>
//                   </div>
//                 </DivForm>
//               </div>

//               <div className="tab-pane p-3" id="preview" role="tabpanel">
//                 <DivForm className="border border-secondary p-2">
//                   <div
//                     className="my-1 px-2 position-relative overflow-hidden"
//                     style={{ height: "2.3rem" }}
//                   >
//                     <ul
//                       className="d-flex flex-nowrap pb-3 ps-0 text-center overflow-auto"
//                       style={{ listStyle: "none", whiteSpace: "nowrap" }}
//                     >
//                       {!fileLoading &&
//                         fileDetail &&
//                         fileDetail?.preview?.map((file, index) => (
//                           <li key={index + 1}>
//                             <button
//                               className="btn btn-primary waves-effect mx-2 btn-sm"
//                               onClick={() => setPreviewFileImage(file)}
//                             >
//                               {file}
//                             </button>
//                           </li>
//                         ))}
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>{" "}
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>{" "}
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>{" "}
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>{" "}
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                       <li>
//                         <button className="btn btn-primary waves-effect mx-2 btn-sm">
//                           test
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                   <ModalInnerDiv
//                     className="border border-secondary p-2 overflow-auto"
//                     style={{
//                       // backgroundImage: `url(${previewFileImage || Test})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "50% 50%",
//                     }}
//                   >
//                     {/* <image
//                       src={Test}
//                       alt="file image"
//                       width="100px"
//                       height="100px"
//                       className="img-fliud"
//                     /> */}
//                   </ModalInnerDiv>
//                 </DivForm>
//               </div>

//               <div className="tab-pane p-3" id="comments" role="tabpanel">
//                 <DivForm className="border border-secondary p-2 overflow-auto">
//                   <div className="mb-5">
//                     <form onSubmit={handleSubmit2(uploadComment)}>
//                       {errors2?.comment && (
//                         <span className="text-danger font-weight-bold">
//                           {" "}
//                           <p>{errors2.comment.message}</p>
//                         </span>
//                       )}
//                       <input
//                         className="form-control-lg form-control"
//                         placeholder="write your comments"
//                         id="comment"
//                         name="comment"
//                         {...register2("comment", {
//                           required: "Please write a comment",
//                         })}
//                       />
//                       <button
//                         type="submit"
//                         className="btn btn-sm btn-primary waves-effect float-end mt-1"
//                       >
//                         Send
//                       </button>
//                     </form>
//                   </div>

//                   <div className="table-responsive">
//                     <table className="table table-striped">
//                       {fileLoading ? (
//                         <div className="position-absolute top-50 start-50">
//                           {/* <Loader />{" "} */}
//                         </div>
//                       ) : (
//                         <>
//                           <tbody>
//                             {fileDetail && fileDetail?.comments?.length > 0 ? (
//                               fileDetail?.comments?.map((file) => (
//                                 <tr key={file.id}>
//                                   <td>
//                                     <p className="mb-1">
//                                       {file.first_name} {file.last_name}
//                                       <span>
//                                         {" "}
//                                         {moment(file.updated_at).format(
//                                           "MM/DD/YYYY"
//                                         )}
//                                       </span>
//                                     </p>
//                                     <p className="mb-n1">{file.comment}</p>
//                                   </td>
//                                 </tr>
//                               ))
//                             ) : (
//                               <div className="position-absolute top-50 text-center end-0 start-0">
//                                 No data found
//                               </div>
//                             )}
//                           </tbody>
//                         </>
//                       )}
//                     </table>
//                   </div>
//                 </DivForm>
//               </div>

//               <div className="tab-pane p-3" id="activities" role="tabpanel">
//                 <DivForm className="border border-secondary p-2 overflow-auto">
//                   {fileLoading ? (
//                     <div className="position-absolute top-50 start-50">
//                       {/* <Loader />{" "} */}
//                     </div>
//                   ) : (
//                     <>
//                       {fileDetail && fileDetail?.activities?.length > 0 ? (
//                         <ol className="activity-feed">
//                           {fileDetail?.activities?.map((file) => (
//                             <li key={file.id} className="feed-item">
//                               <div className="feed-item-list">
//                                 <span className="date">
//                                   {moment(file?.created_at).fromNow()}
//                                 </span>
//                                 <span className="activity-text">
//                                   <span className="fw-bolder">
//                                     {file?.first_name} {file?.last_name}{" "}
//                                   </span>
//                                   {file?.description}
//                                 </span>
//                               </div>
//                             </li>
//                           ))}
//                         </ol>
//                       ) : (
//                         <div className="position-absolute top-50 text-center end-0 start-0">
//                           No data found
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </DivForm>
//               </div>
//             </div>
//           </div>
//           <div className="px-4 mx-2 mb-3">
//             {/* <MemoModalFooter
//               memoFooter={workflow_step_id}
//               download={filePermission?.can_download}
//               open={filePermission?.can_read}
//               del={filePermission?.can_write}
//               workflow={fileDetail?.workflow}
//               workflowStepValue={fileDetail?.workflowCurrentStep}
//               workflowStepOptions={fileDetail?.workflowSteps}
//               file_id={fileDetail?.file_details}
//             /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }