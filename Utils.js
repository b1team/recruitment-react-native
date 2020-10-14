export function get_user_type_mapping(user_type){
    var mapping = {
        employee: "Người Tìm Việc",
        employer: "Nhà Tuyển Dụng",
        viewer: "Người Lạ"
    }
    return mapping[user_type]
};