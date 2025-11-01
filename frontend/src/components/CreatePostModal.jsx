import {useState, usestate} from 'react';
import './CreatePostModal.css';
function CreatePostModal({onClose, onCreated}){
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileOnChange  = (e)=>{
        const selectedFile = e.target.files?.[0];
        if(!selectedFile) return;
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!file) return alert('pick an image or video');
        setLoading(true);
        const form = new FormData();
        form.append('media', file);
        form.append('caption', caption);

        try{
            const response = await fetch('http://localhost:5000/api/posts', {
                method:'POST',
                credentials:'include',
                body:form,
            });
            if(!response.ok) throw new Error('upload failed');
            const newPost = await response.json();
            onCreated(newPost);
            onClose();
        }catch(error){
            console.log(error);
            alert(error.message);
        }finally{
            setLoading(false);
        }

    }

    return (
            
            <div className = "modal-backdrop" onClick = {onClose}>
                <div className = "modal-content" onClick = {(e)=>e.stopPropagation()}>
                    <h2>Create Post/Reel</h2>
                    {preview && (
                        <div className = "preview">
                            {file.type.startsWith("video") ? (
                                <video src={preview} controls/>
                            ):(
                                <img src={preview} alt="preview"/>
                            )}      
                        </div>
                    )}

                    <form onSubmit = {handleSubmit}>
                        <input type="file"
                                name="media"
                               accept = "image/*, video/mp4"
                               onChange = {handleFileOnChange}
                               required
                        />
                        <textarea placeholder="write a caption..."
                                  value = {caption}
                                  onChange = {(e)=> setCaption(e.target.value)}
                                  rows = {3}
                                  required
                        />
                        <div className = "actions">
                            <button type = "submit"
                                    disabled = {loading}>
                                        {loading ? "Uploading.." : "Share"}
                                    </button>
                            <button type = "button" onClick={onClose}>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
        
        
    );
}
export default CreatePostModal;