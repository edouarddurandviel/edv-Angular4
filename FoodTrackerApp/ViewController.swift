//
//  ViewController.swift
//  FoodTrackerApp
//
//  Created by Apple on 30/03/2017.
//  Copyright © 2017 Apple. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITextFieldDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

  
    @IBOutlet weak var label: UILabel!
    
  
    @IBOutlet weak var inputtextentry: UITextField!
    
    @IBOutlet weak var button: UIButton!
    
    
    @IBOutlet weak var btn: RatingControl!
    
    
    
   
    @IBOutlet weak var photoImageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        inputtextentry.delegate = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        label.text = textField.text
    }

    
    @IBAction func changetext(_ sender: Any) {
        inputtextentry.text = "new text"
        
    }
    
    @IBAction func selectImageFromLibrary(_ sender: UITapGestureRecognizer) {
        
        inputtextentry.resignFirstResponder()
        
        let imagePickerController = UIImagePickerController()
        
        imagePickerController.sourceType = .photoLibrary
        
        imagePickerController.delegate = self
        
        present(imagePickerController, animated: true, completion: nil)
        
    }
    
    // MARK: UIImagePickerControllerDelegate
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        
        // Dismiss the picker if the user canceled the operation
        dismiss(animated: true, completion: nil)
    }
    
    
    // Image Picker Method
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        
        // Use original image
        guard let selectedImage = info[UIImagePickerControllerOriginalImage] as?
            UIImage else{
            
            fatalError("Expected a dictionary that contain an Image, but was provide following: \(info)")
            
        }
        
        // Image view is defined with selectedImage
        photoImageView.image = selectedImage
        
        // Dismiss the picker
        dismiss(animated: true, completion: nil)
    }
    
    
    


}

