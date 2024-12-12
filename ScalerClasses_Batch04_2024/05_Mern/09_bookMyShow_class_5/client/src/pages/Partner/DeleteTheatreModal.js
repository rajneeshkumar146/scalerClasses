import { Modal, message } from "antd";
import { deleteTheatre } from "../../api/theatre";
import { ShowLoading, HideLoading } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";

const DeleteTheatreModal = ({
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    selectedTheatre,
    setSelectedTheatre,
    getData,
}) => {

}

export default DeleteTheatreModal;