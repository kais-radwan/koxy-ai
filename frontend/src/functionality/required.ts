import { openAlert } from "../components/Alert";
import { closeWaiting } from "../components/Waiting";

type RequiredObject = {
    value: any,
    key: string,
    type: string,
    size?: number
}

type RequiredOk = {
    ok: true,
    err: null
}

type RequiredErr = {
    ok: false,
    err: string
}

type RequiredRes = RequiredOk | RequiredErr;

const required = (data: Array<RequiredObject>): RequiredRes => {

    let ok: boolean = true;
    let err: any;

    data.map(item => {

        const itemKey = item.key;
        const itemValue = item.value;
        const itemType = item.type;
        const itemSize = item.size || itemValue.length;

        if (!itemValue || typeof itemValue !== itemType || itemSize !== itemValue.length) {
            const error = `${itemKey} is required to be a ${itemType}`;
            openAlert(error);
            closeWaiting();
            ok = false;
            err = error;
        }

    });

    return {
        ok,
        err
    }

}

export default required